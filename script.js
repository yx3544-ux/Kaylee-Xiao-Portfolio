let menuIcon = document.querySelector('svg.menu');
let header = document.querySelector('header');

menuIcon.addEventListener('click', () => {
  header.classList.toggle('open');
});

let root = document.documentElement;
let modeButton = document.getElementById("color-mode");

function getSystemPreference() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");

  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

function applyTheme(theme) {
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  localStorage.setItem("theme", theme);
}

let saved = localStorage.getItem("theme");
applyTheme(saved || getSystemPreference());

modeButton.addEventListener("click", () => {
  let newTheme = root.classList.contains("light") ? "dark" : "light";
  applyTheme(newTheme);
});
