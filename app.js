const labelEl1 = document.getElementById("light-label");
const labelEl2 = document.getElementById("dark-label");
const containerEl = document.querySelector(".container");
const boxEl = document.querySelectorAll(".box");
let a = Object.values(boxEl);
let h1 = document.getElementById("title");
const bodyEl = document.querySelector("body");

// dark
labelEl2.addEventListener("click", () => {
  bodyEl.style.background = "#222";
  title.textContent = "Dark Mode";
  a.map((v) => v.classList.remove("light-mode-con"));
  containerEl.classList.remove("light-mode");
  containerEl.classList.add("dark-mode");
  a.map((v) => v.classList.add("dark-mode-con"));
});

// light
labelEl1.addEventListener("click", () => {
  bodyEl.style.background = "silver";

  title.textContent = "Light Mode";
  a.map((v) => v.classList.remove("dark-mode-con"));
  containerEl.classList.remove("dark-mode");
  containerEl.classList.add("light-mode");
  a.map((v) => v.classList.add("light-mode-con"));
});
