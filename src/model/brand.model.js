// models/Brand.js

const db = require("../db/db");

const Brand = {
  getAll: async () => {
    const query = "SELECT * FROM brands";
    const result = await db.query(query);
    return result.rows;
  },

  getById: async (id) => {
    const query = "SELECT * FROM brands WHERE id = $1";
    const result = await db.query(query, [id]);
    return result.rows[0];
  },

  create: async (brandData) => {
    const { name, description } = brandData;
    const query =
      "INSERT INTO brands (name, description) VALUES ($1, $2) RETURNING *";
    const result = await db.query(query, [name, description]);
    return result.rows[0];
  },

  update: async (id, brandData) => {
    const { name, description } = brandData;
    const query =
      "UPDATE brands SET name = $1, description = $2 WHERE id = $3 RETURNING *";
    const result = await db.query(query, [name, description, id]);
    return result.rows[0];
  },

  delete: async (id) => {
    const query = "DELETE FROM brands WHERE id = $1 RETURNING *";
    const result = await db.query(query, [id]);
    return result.rows[0];
  },
};

module.exports = Brand;
