const express = require("express");
const verifyToken = require("../middleware/authMiddleware");

const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
} = require("../controllers/productController");

const router = express.Router();

// ==============================
// Public Routes
// ==============================

// Search Products
router.get("/search", searchProducts);

// Get All Products
router.get("/", getAllProducts);

// Get Single Product
router.get("/:id", getProductById);

// ==============================
// Protected Routes
// ==============================

// Create Product
router.post("/", verifyToken, createProduct);

// Update Product
router.put("/:id", verifyToken, updateProduct);

// Delete Product
router.delete("/:id", verifyToken, deleteProduct);

module.exports = router;