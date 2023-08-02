// routes/authRoutes.js
const express = require("express");
const { registerUser, loginUser } = require("../controller/auth.controller");
const router = express.Router();

// POST register a new user
router.post("/register", registerUser);

// POST login user
router.post("/login", loginUser);

module.exports = router;
