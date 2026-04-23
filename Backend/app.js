const express = require("express");
const app = express();
const cors = require("cors");
const userRoute = require("./routes/userRoute");

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoute);

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
