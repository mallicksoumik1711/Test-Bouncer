const express = require("express");
const app = express();

// Load environment variables
const dotenv = require("dotenv");
dotenv.config();

// cors
const cors = require("cors");
app.use(cors({ origin: "http://localhost:3006", credentials: true }));

// Connect to MongoDB
const connectDB = require("./config/db.config");
connectDB();

app.use(express.json());

// cookie parser
const cookieParser = require("cookie-parser");
app.use(cookieParser());

// BOUNCER-Middleware
const excludedRoutes = ["/auth/login", "/auth/register"];

app.use(async (req, res, next) => {
  if (excludedRoutes.includes(req.path)) {
    return next();
  }

  try {
    const response = await fetch("http://localhost:3000/validate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.API_KEY,
        Authorization: req.cookies.token ? `Bearer ${req.cookies.token}` : "",
      },
      body: JSON.stringify({
        projectId: "lenalena-6kfqe2vb",
        path: req.path,
        method: req.method,
      }),
    });

    const data = await response.json();

    console.log(data);

    if (!data.allowed) {
      return res.status(403).json({
        message: data.reason || data.message,
      });
    }

    next();
  } catch (err) {
    return res.status(500).json({
      message: "Auth service unavailable",
    });
  }
});

// Routes

// Auth Routes
const authRoutes = require("./routes/auth/auth.route");
app.use("/auth", authRoutes);

// Dashboard route
const dashboardRoute = require("./routes/FrontendRoutes/dashboard.route");
app.use("/dashboard", dashboardRoute);


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
