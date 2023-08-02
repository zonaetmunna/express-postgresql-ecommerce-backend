// controllers/authController.js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Auth = require("../model/auth.model");

const generateToken = (user) => {
  const token = jwt.sign(
    { id: user.id, role: user.role },
    "your_secret_key_here",
    {
      expiresIn: "1h", // Set the expiration time of the token
    }
  );
  return token;
};

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const userExists = await Auth.getUserByEmail(email);
    if (userExists) {
      return res.status(409).json({ error: "User already exists" });
    }

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const newUser = await Auth.createUser({
      username,
      email,
      passwordHash,
      role: "customer",
    });
    const token = generateToken(newUser);

    res.status(201).json({ user: newUser, token });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Auth.getUserByEmail(email);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password_hash);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = generateToken(user);
    res.json({ user, token });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
