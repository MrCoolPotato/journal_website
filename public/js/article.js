document.addEventListener("DOMContentLoaded", async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const articleId = urlParams.get("id");
  const res = await fetch(`/api/articles/${articleId}`);
  const article = await res.json();

  document.getElementById("article-title").textContent = article.title;
  document.getElementById("article-content").textContent = article.content;
  document.getElementById(
    "article-author"
  ).textContent = `Author: ${article.author}`;
});
