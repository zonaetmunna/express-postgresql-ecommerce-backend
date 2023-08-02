// models/Store.js

const db = require("../db/db");

const Store = {
  getAll: async () => {
    const query = "SELECT * FROM stores";
    const result = await db.query(query);
    return result.rows;
  },

  getById: async (id) => {
    const query = "SELECT * FROM stores WHERE id = $1";
    const result = await db.query(query, [id]);
    return result.rows[0];
  },

  create: async (storeData) => {
    const { name, description, location } = storeData;
    const query =
      "INSERT INTO stores (name, description, location) VALUES ($1, $2, $3) RETURNING *";
    const result = await db.query(query, [name, description, location]);
    return result.rows[0];
  },

  update: async (id, storeData) => {
    const { name, description, location } = storeData;
    const query =
      "UPDATE stores SET name = $1, description = $2, location = $3 WHERE id = $4 RETURNING *";
    const result = await db.query(query, [name, description, location, id]);
    return result.rows[0];
  },

  delete: async (id) => {
    const query = "DELETE FROM stores WHERE id = $1 RETURNING *";
    const result = await db.query(query, [id]);
    return result.rows[0];
  },
};

module.exports = Store;
