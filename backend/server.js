const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");

const passport = require("passport");
const session = require("express-session");

require("./config/passport");

const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Health Check
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "AI Product Description Generator Backend Running 🚀",
  });
});

// Routes
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});