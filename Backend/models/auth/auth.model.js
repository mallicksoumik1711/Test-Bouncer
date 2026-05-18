const mongoose = require("mongoose");

const authSchema = mongoose.Schema(
  {
    fullname: String,
    email: {
      type: String,
      unique: true,
    },
    password: String,
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Auth", authSchema);
