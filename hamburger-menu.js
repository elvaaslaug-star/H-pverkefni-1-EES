const nav = document.querySelector("nav");

const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  hamburger.setAttribute("aria-expanded", isOpen);
});
