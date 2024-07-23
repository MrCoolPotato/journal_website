document.addEventListener("DOMContentLoaded", async () => {
  const latestArticleContainer = document.querySelector(
    ".main-article .article-content"
  );
  const otherArticlesContainer = document.querySelector(".other-articles");

  const res = await fetch("dummy-data.json");
  const articles = await res.json();

  if (articles.length > 0) {
    const latestArticle = articles[0];
    latestArticleContainer.innerHTML = `
            <h2>${latestArticle.title}</h2>
            <p>By ${latestArticle.author} - ${latestArticle.date}</p>
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
