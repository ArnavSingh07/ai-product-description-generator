const express = require("express");
const passport = require("passport");
const router = express.Router();

const {
  registerUser,
  loginUser,
  googleSuccess,
} = require("../controllers/authController");

const {
  registerValidation,
  loginValidation,
  validate,
} = require("../validation/authValidation");

const authLimiter = require("../middleware/rateLimiter");

// =====================================
// Email & Password Authentication
// =====================================

// Register
router.post(
  "/register",
  authLimiter,
  registerValidation,
  validate,
  registerUser
);

// Login
router.post(
  "/login",
  authLimiter,
  loginValidation,
  validate,
  loginUser
);

// =====================================
// Google OAuth
// =====================================

// Redirect user to Google
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

// Google Callback
router.get(
  "/google/callback",

  // Debug Step 1
  (req, res, next) => {
    console.log("✅ Google callback reached");
    next();
  },

  passport.authenticate("google", {
    failureRedirect: "http://localhost:5173/login",
    session: true,
  }),

  // Debug Step 2
  (req, res, next) => {
    console.log("✅ Passport authentication successful");
    next();
  },

  googleSuccess
);

module.exports = router;