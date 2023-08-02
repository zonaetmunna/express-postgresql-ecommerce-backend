// controllers/brandController.js

const Brand = require("../model/brand.model");

const getAllBrands = async (req, res) => {
  try {
    const brands = await Brand.getAll();
    res.json(brands);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getBrandById = async (req, res) => {
  const { id } = req.params;
  try {
    const brand = await Brand.getById(id);
    if (!brand) {
      return res.status(404).json({ error: "Brand not found" });
    }
    res.json(brand);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createBrand = async (req, res) => {
  const { name, description } = req.body;
  try {
    const newBrand = await Brand.create({ name, description });
    res.status(201).json(newBrand);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateBrand = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  try {
    const updatedBrand = await Brand.update(id, { name, description });
    if (!updatedBrand) {
      return res.status(404).json({ error: "Brand not found" });
    }
    res.json(updatedBrand);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteBrand = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBrand = await Brand.delete(id);
    if (!deletedBrand) {
      return res.status(404).json({ error: "Brand not found" });
    }
    res.json(deletedBrand);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllBrands,
  getBrandById,
  createBrand,
  updateBrand,
  deleteBrand,
};
