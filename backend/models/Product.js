const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      trim: true,
    },

    ingredients: {
      type: String,
      required: true,
    },

    weight: {
      type: String,
      required: true,
    },

    tone: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },

    features: {
      type: [String],
      default: [],
    },

    seoKeywords: {
      type: [String],
      default: [],
    },

    metaDescription: {
      type: String,
      default: "",
    },

    marketingCaption: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);