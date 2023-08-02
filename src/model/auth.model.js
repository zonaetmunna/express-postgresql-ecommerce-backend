// models/Auth.js

const db = require("../db/db");

const Auth = {
  getUserByEmail: async (email) => {
    const query = "SELECT * FROM users WHERE email = $1";
    const result = await db.query(query, [email]);
    return result.rows[0];
  },

  createUser: async (userData) => {
    const { username, email, passwordHash, role } = userData;
    const query =
      "INSERT INTO users (username, email, password_hash, role) VALUES ($1, $2, $3, $4) RETURNING *";
    const result = await db.query(query, [username, email, passwordHash, role]);
    return result.rows[0];
  },
};

module.exports = Auth;
