const products = require("../data/products");

// GET /api/products
const getAllProducts = (req, res) => {
  res.status(200).json(products);
};

// GET /api/products/:id
const getProductById = (req, res) => {
  const id = parseInt(req.params.id);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  res.status(200).json(product);
};

// POST /api/products
const createProduct = (req, res) => {
  const { productName, ingredients, weight, tone, description } = req.body;

  if (!productName || !ingredients || !weight || !tone) {
    return res.status(400).json({
      success: false,
      message: "Please provide all required fields",
    });
  }

  const newProduct = {
    id: products.length + 1,
    productName,
    ingredients,
    weight,
    tone,
    description: description || "",
  };

  products.push(newProduct);

  res.status(201).json({
    success: true,
    product: newProduct,
  });
};

// PUT /api/products/:id
const updateProduct = (req, res) => {
  const id = parseInt(req.params.id);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  Object.assign(product, req.body);

  res.status(200).json({
    success: true,
    product,
  });
};

// DELETE /api/products/:id
const deleteProduct = (req, res) => {
  const id = parseInt(req.params.id);

  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  products.splice(index, 1);

  res.status(204).send();
};

// GET /api/products/search?q=
const searchProducts = (req, res) => {
  const query = (req.query.q || "").toLowerCase();

  const result = products.filter((p) =>
    p.productName.toLowerCase().includes(query)
  );

  res.status(200).json(result);
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
};