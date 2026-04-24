const express = require("express");
const router = express.Router();
const { createUsers, getUsers, updateUser, deleteUser } = require("../controllers/userController");

router.post("/create", createUsers);
router.get("/", getUsers);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;