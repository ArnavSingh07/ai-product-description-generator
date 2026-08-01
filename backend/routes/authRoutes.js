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

// Email & Password Authentication

router.post(
  "/register",
  authLimiter,
  registerValidation,
  validate,
  registerUser
);

router.post(
  "/login",
  authLimiter,
  loginValidation,
  validate,
  loginUser
);

// Google OAuth

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: `${process.env.CLIENT_URL}/login`,
    session: true,
  }),
  googleSuccess
);

module.exports = router;