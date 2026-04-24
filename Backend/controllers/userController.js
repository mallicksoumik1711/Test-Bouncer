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

const updateUser = (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    const index = data.informations.findIndex(
      (user) => user.id == id
    );

    if (index === -1) {
      return res.status(404).json({ message: "User not found" });
    }

    data.informations[index] = {
      ...data.informations[index],
      ...updatedData,
    };

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    return res.json({
      message: "User updated successfully",
      user: data.informations[index],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating user" });
  }
};

const deleteUser = (req, res) => {
  try {
    const { id } = req.params;

    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    const newUsers = data.informations.filter(
      (user) => user.id != id
    );

    data.informations = newUsers;

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    return res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting user" });
  }
};

module.exports = {
  createUsers,
  getUsers,
  updateUser,
  deleteUser,
};
