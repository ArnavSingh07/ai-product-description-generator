const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const session = require("express-session");
const passport = require("passport");

dotenv.config();

const connectDB = require("./config/db");
require("./config/passport");

// Routes
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const aiRoutes = require("./routes/aiRoutes");
const uploadRoutes = require("./routes/uploadRoutes"); // ✅ NEW

const app = express();

// ✅ Trust Render's proxy (Required for express-rate-limit)
app.set("trust proxy", 1);

// Connect Database
connectDB();

// Middleware
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET || "your_session_secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Health Check Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "AI Product Description Generator Backend Running 🚀",
  });
});

// ==================== API Routes ====================

app.use("/api/products", productRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/ai", aiRoutes);

// ✅ Image Upload Route
app.use("/api/upload", uploadRoutes);

// ====================================================

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API Route Not Found",
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});