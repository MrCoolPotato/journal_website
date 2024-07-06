document.addEventListener("DOMContentLoaded", async () => {
  const articlesList = document.getElementById("articles");
  const res = await fetch("/api/articles");
  const articles = await res.json();

  articles.forEach((article) => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.href = `/article.html?id=${article._id}`;
    link.textContent = article.title;
    li.appendChild(link);
    articlesList.appendChild(li);
  });
});
