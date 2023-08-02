// routes/productRoutes.js
const express = require("express");
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/product.controller");
const router = express.Router();

// GET all products
router.get("/", getAllProducts);

// GET product by ID
router.get("/:id", getProductById);

// POST create a new product
router.post("/", createProduct);

// PUT update a product by ID
router.put("/:id", updateProduct);

// DELETE a product by ID
router.delete("/:id", deleteProduct);

module.exports = router;
