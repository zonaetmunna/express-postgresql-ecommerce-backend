const express = require("express");
const router = express.Router();

router.use("/products", require("./product.routes"));
router.use("/brands", require("./brand.routes"));
router.use("/categories", require("./category.routes"));
router.use("/stores", require("./store.routes"));
router.use("/auth", require("./auth.routes"));

module.exports = router;
