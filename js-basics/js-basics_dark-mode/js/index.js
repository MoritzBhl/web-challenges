console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const darkModeBtn = document.querySelector('[data-js="dark-mode-button"]');
const lightModeBtn = document.querySelector('[data-js="light-mode-button"]');
const toggleMode = document.querySelector('[data-js="toggle-button"]');

lightModeBtn.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});

darkModeBtn.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});

toggleMode.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
