const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
console.log("MONGO_URI:", process.env.MONGO_URI);

// Connect to MongoDB
connectDB();

const productRoutes = require("./routes/productRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health Check Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "AI Product Description Generator Backend Running 🚀",
  });
});

// Product Routes
app.use("/api/products", productRoutes);

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});