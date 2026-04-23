const express = require("express");
const router = express.Router();
const { createUsers, getUsers } = require("../controllers/userController");

router.post("/create", createUsers);
router.get("/", getUsers);

module.exports = router;