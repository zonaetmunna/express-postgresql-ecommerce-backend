// models/Product.js

const db = require("../db/db");

class Product {
  static async getAll() {
    try {
      const query = "SELECT * FROM products";
      const result = await db.query(query);
      return result.rows;
    } catch (error) {
      throw error;
    }
  }

  static async getById(productId) {
    try {
      const query = "SELECT * FROM products WHERE id = $1";
      const result = await db.query(query, [productId]);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  static async create(productData) {
    try {
      const { name, description, price, stock_quantity, image_url } =
        productData;
      const query =
        "INSERT INTO products (name, description, price, stock_quantity, image_url) VALUES ($1, $2, $3, $4, $5) RETURNING *";
      const result = await db.query(query, [
        name,
        description,
        price,
        stock_quantity,
        image_url,
      ]);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  static async update(productId, productData) {
    try {
      const { name, description, price, stock_quantity, image_url } =
        productData;
      const query =
        "UPDATE products SET name = $1, description = $2, price = $3, stock_quantity = $4, image_url = $5 WHERE id = $6 RETURNING *";
      const result = await db.query(query, [
        name,
        description,
        price,
        stock_quantity,
        image_url,
        productId,
      ]);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  static async delete(productId) {
    try {
      const query = "DELETE FROM products WHERE id = $1 RETURNING *";
      const result = await db.query(query, [productId]);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Product;
