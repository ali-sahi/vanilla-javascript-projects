const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const content = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;

  if (id) {
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    // Hide All Content
    content.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    // element is again used because the upper ID is a simple text, while here it is a node element
    element.classList.add("active");
  }
});
