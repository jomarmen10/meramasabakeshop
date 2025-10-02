let lastScrollY = window.scrollY;
const headerContainer = document.getElementById("headerContainer");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    headerContainer.classList.add("hidden");
  } else {
    headerContainer.classList.remove("hidden");
  }
  lastScrollY = window.scrollY;
});
