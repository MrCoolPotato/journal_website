const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Serve index.html at the root URL
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Serve article.html for /article
app.get("/article", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "article.html"));
});

// Serve admin.html for /admin
app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "admin.html"));
});

// Fallback to index.html for any other routes (useful for client-side routing)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Static server running on port ${PORT}`);
});
