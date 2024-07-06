document.addEventListener("DOMContentLoaded", async () => {
  const articlesContainer = document.getElementById("articles-container");
  const res = await fetch("/api/articles");
  const articles = await res.json();

  articles.forEach((article) => {
    const articleDiv = document.createElement("div");
    articleDiv.className = "article";
    articleDiv.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.content.substring(0, 100)}...</p>
            <a href="/article.html?id=${article._id}">Read more</a>
        `;
    articlesContainer.appendChild(articleDiv);
  });
});
