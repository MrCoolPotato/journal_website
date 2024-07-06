document
  .getElementById("article-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const author = document.getElementById("author").value;

    const res = await fetch("/api/articles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content, author }),
    });

    if (res.ok) {
      alert("Article saved successfully!");
      document.getElementById("article-form").reset();
    } else {
      alert("Error saving article.");
    }
  });
