// Product Catalog API (Simple Assessment Project)

const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// In-memory product data (5+ products, 3 categories, mix of stock status)
const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 45000, inStock: true },
  { id: 2, name: "Smartphone", category: "Electronics", price: 25000, inStock: true },
  { id: 3, name: "Office Chair", category: "Furniture", price: 8000, inStock: false },
  { id: 4, name: "Water Bottle", category: "Accessories", price: 500, inStock: true },
  { id: 5, name: "Headphones", category: "Electronics", price: 1500, inStock: false }
];

// -------------------------------------------
// GET /products → Returns all products
// -------------------------------------------
app.get("/products", (req, res) => {
  res.json(products);
});

// -------------------------------------------
// GET /products/categories → Unique categories
// -------------------------------------------
app.get("/products/categories", (req, res) => {
  const categories = [...new Set(products.map(p => p.category))];
  res.json({ categories });
});

// -------------------------------------------
// GET /products/instock → Only in-stock products
// -------------------------------------------
app.get("/products/instock", (req, res) => {
  const inStockProducts = products.filter(p => p.inStock === true);
  res.json(inStockProducts);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});