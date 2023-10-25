import createContactPage from "./scripts/loaderContact.js";
import createMainPage from "./scripts/loaderMain.js";
import createMenuPage from "./scripts/loaderMenu.js";

function loadMainPage() {
  const oldContent = document.querySelector("#content");
  const newContent = createMainPage();
  oldContent.remove();
  document.body.append(newContent);
  addEventListeners();
}

function loadMenuPage() {
  const oldContent = document.querySelector("#content");
  const newContent = createMenuPage();
  oldContent.remove();
  document.body.append(newContent);
  addEventListeners();
}

function loadContactPage() {
  const oldContent = document.querySelector("#content");
  const newContent = createContactPage();
  oldContent.remove();
  document.body.append(newContent);
  addEventListeners();
}

function addEventListeners() {
  const menuLinks = document.querySelectorAll('nav[class$="header-nav"] a');
  menuLinks[0].addEventListener("click", () => {
    if (!menuLinks[0].classList.contains("active")) {
      loadMainPage();
    }
  });
  menuLinks[1].addEventListener("click", () => {
    if (!menuLinks[1].classList.contains("active")) {
      loadMenuPage();
    }
  });
  menuLinks[2].addEventListener("click", () => {
    if (!menuLinks[2].classList.contains("active")) {
      loadContactPage();
    }
  });
}

window.addEventListener("load", () => {
  loadMainPage();
  addEventListeners();
});
