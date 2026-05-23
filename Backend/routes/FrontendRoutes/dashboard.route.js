const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Dashboard access granted",
      user: {
        authenticated: true,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to load dashboard",
    });
  }
});

router.get("/all-products", async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "All products access granted",
      user: {
        authenticated: true,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to load all products",
    });
  }
});

module.exports = router;