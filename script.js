const pages = document.getElementById("pages");
const buttons = document.querySelectorAll(".tabs button");

let currentIndex = 0;

function goToPage(index) {
  currentIndex = index;

  const offset = index * window.innerWidth;
  pages.style.transform = `translateX(-${offset}px)`;

  buttons.forEach(btn => btn.classList.remove("active"));
  buttons[index].classList.add("active");
}

/* 🔥 VERY IMPORTANT — fix resize bug on mobile */
window.addEventListener("resize", () => {
  const offset = currentIndex * window.innerWidth;
  pages.style.transform = `translateX(-${offset}px)`;
});
