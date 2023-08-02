// routes/brandRoutes.js
const express = require("express");
const {
  getAllBrands,
  getBrandById,
  createBrand,
  updateBrand,
  deleteBrand,
} = require("../controller/brand.controller");
const router = express.Router();

// GET all brands
router.get("/", getAllBrands);

// GET brand by ID
router.get("/:id", getBrandById);

// POST create a new brand
router.post("/", createBrand);

// PUT update a brand by ID
router.put("/:id", updateBrand);

// DELETE a brand by ID
router.delete("/:id", deleteBrand);

module.exports = router;
