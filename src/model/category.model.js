// models/Category.js

const db = require("../db/db");

const Category = {
  getAll: async () => {
    const query = "SELECT * FROM categories";
    const result = await db.query(query);
    return result.rows;
  },

  getById: async (id) => {
    const query = "SELECT * FROM categories WHERE id = $1";
    const result = await db.query(query, [id]);
    return result.rows[0];
  },

  create: async (categoryData) => {
    const { name, description } = categoryData;
    const query =
      "INSERT INTO categories (name, description) VALUES ($1, $2) RETURNING *";
    const result = await db.query(query, [name, description]);
    return result.rows[0];
  },

  update: async (id, categoryData) => {
    const { name, description } = categoryData;
    const query =
      "UPDATE categories SET name = $1, description = $2 WHERE id = $3 RETURNING *";
    const result = await db.query(query, [name, description, id]);
    return result.rows[0];
  },

  delete: async (id) => {
    const query = "DELETE FROM categories WHERE id = $1 RETURNING *";
    const result = await db.query(query, [id]);
    return result.rows[0];
  },
};

module.exports = Category;
