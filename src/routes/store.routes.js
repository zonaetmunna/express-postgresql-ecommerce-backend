// routes/storeRoutes.js
const express = require("express");
const {
  getAllStores,
  getStoreById,
  createStore,
  updateStore,
  deleteStore,
} = require("../controller/store.controller");
const router = express.Router();

// GET all stores
router.get("/", getAllStores);

// GET store by ID
router.get("/:id", getStoreById);

// POST create a new store
router.post("/", createStore);

// PUT update a store by ID
router.put("/:id", updateStore);

// DELETE a store by ID
router.delete("/:id", deleteStore);

module.exports = router;
