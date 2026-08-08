const express = require("express");

const {
  generateDescription,
  analyzeImage,
} = require("../controllers/aiController");

const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

// Generate Product Description
router.post("/generate", generateDescription);

// Analyze Product Image
router.post(
  "/analyze-image",
  upload.single("image"),
  analyzeImage
);

module.exports = router;