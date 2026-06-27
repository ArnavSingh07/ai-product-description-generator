const express = require("express");

const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
} = require("../controllers/productController");

const router = express.Router();

// Search Products
router.get("/search", searchProducts);

// Get All Products
router.get("/", getAllProducts);

// Get Single Product
router.get("/:id", getProductById);

// Create Product
router.post("/", createProduct);

// Update Product
router.put("/:id", updateProduct);

// Delete Product
router.delete("/:id", deleteProduct);

module.exports = router;