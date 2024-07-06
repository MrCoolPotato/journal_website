document.addEventListener("DOMContentLoaded", async () => {
  const latestArticleContainer = document.getElementById("latest-article");
  const otherArticlesContainer = document.getElementById("other-articles");

  // Fetch dummy data
  const res = await fetch("dummy-data.json");
  const articles = await res.json();

  if (articles.length > 0) {
    const latestArticle = articles[0];
    latestArticleContainer.innerHTML = `
            <img src="images/sample.jpg" alt="Article Image">
            <h2>${latestArticle.title}</h2>
            <p>${latestArticle.content.substring(0, 200)}...</p>
            <a href="/article.html?id=${latestArticle.id}">Read more</a>
        `;

    articles.slice(1).forEach((article) => {
      const articleDiv = document.createElement("div");
      articleDiv.className = "article";
      articleDiv.innerHTML = `
                <img src="images/sample.jpg" alt="Article Image">
                <h3>${article.title}</h3>
                <p>${article.content.substring(0, 100)}...</p>
                <a href="/article.html?id=${article.id}">Read more</a>
            `;
      otherArticlesContainer.appendChild(articleDiv);
    });
  }
});
