const fs = require("fs");
const { get } = require("http");
const path = require("path");

const filePath = path.join(__dirname, "../database.json");

const getUsers = (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    return res.status(200).json(data.informations || []);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error fetching users" });
  }
};

const createUsers = (req, res) => {
  try {
    const { name, email, password, description } = req.body;
    if (!name || !email || !password || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      description,
    };
    data.informations.push(newUser);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.log("Error creating user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  createUsers,
  getUsers,
};
