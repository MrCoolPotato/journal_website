const express = require("express");
const Article = require("../models/Article");
const router = express.Router();

// Get all articles
router.get("/", async (req, res) => {
  const articles = await Article.find();
  res.json(articles);
});

// Get an article by ID
router.get("/:id", async (req, res) => {
  const article = await Article.findById(req.params.id);
  res.json(article);
});

// Create a new article
router.post("/", async (req, res) => {
  const newArticle = new Article(req.body);
  const savedArticle = await newArticle.save();
  res.status(201).json(savedArticle);
});

// Update an article
router.put("/:id", async (req, res) => {
  const updatedArticle = await Article.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedArticle);
});

// Delete an article
router.delete("/:id", async (req, res) => {
  await Article.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;
