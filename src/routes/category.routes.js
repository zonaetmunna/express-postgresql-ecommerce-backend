// routes/categoryRoutes.js
const express = require("express");
const {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controller/category.controller");
const router = express.Router();

// GET all categories
router.get("/", getAllCategories);

// GET category by ID
router.get("/:id", getCategoryById);

// POST create a new category
router.post("/", createCategory);

// PUT update a category by ID
router.put("/:id", updateCategory);

// DELETE a category by ID
router.delete("/:id", deleteCategory);

module.exports = router;
