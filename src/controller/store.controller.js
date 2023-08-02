// controllers/storeController.js

const Store = require("../model/store.model");

const getAllStores = async (req, res) => {
  try {
    const stores = await Store.getAll();
    res.json(stores);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getStoreById = async (req, res) => {
  const { id } = req.params;
  try {
    const store = await Store.getById(id);
    if (!store) {
      return res.status(404).json({ error: "Store not found" });
    }
    res.json(store);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createStore = async (req, res) => {
  const { name, description, location } = req.body;
  try {
    const newStore = await Store.create({ name, description, location });
    res.status(201).json(newStore);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateStore = async (req, res) => {
  const { id } = req.params;
  const { name, description, location } = req.body;
  try {
    const updatedStore = await Store.update(id, {
      name,
      description,
      location,
    });
    if (!updatedStore) {
      return res.status(404).json({ error: "Store not found" });
    }
    res.json(updatedStore);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteStore = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedStore = await Store.delete(id);
    if (!deletedStore) {
      return res.status(404).json({ error: "Store not found" });
    }
    res.json(deletedStore);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllStores,
  getStoreById,
  createStore,
  updateStore,
  deleteStore,
};
