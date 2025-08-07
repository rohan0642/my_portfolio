// articles.js

const btn = document.getElementById("toggleBtn");
const fullArticle = document.getElementById("fullArticle");
const preview = document.getElementById("preview");

btn.addEventListener("click", () => {
  const isHidden = fullArticle.classList.contains("hidden");

  if (isHidden) {
    fullArticle.classList.remove("hidden");
    preview.classList.add("hidden");
    btn.textContent = "Read Less";
  } else {
    fullArticle.classList.add("hidden");
    preview.classList.remove("hidden");
    btn.textContent = "Read More";
  }
});
