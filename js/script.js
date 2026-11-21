// Mobile menu
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

nav.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Project page: switch the big preview when a thumbnail is clicked
const viewerImg = document.getElementById("viewer-img");

if (viewerImg) {
  const viewerCaption = document.getElementById("viewer-caption");
  const thumbs = document.querySelectorAll(".thumb");

  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      viewerImg.src = thumb.dataset.src;
      viewerImg.alt = thumb.dataset.alt;
      viewerCaption.textContent = thumb.dataset.caption;

      thumbs.forEach((t) => {
        t.classList.remove("active");
        t.setAttribute("aria-pressed", "false");
      });
      thumb.classList.add("active");
      thumb.setAttribute("aria-pressed", "true");
    });
  });
}
