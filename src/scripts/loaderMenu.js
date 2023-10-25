import { createElement, appendChildren } from "./ElementCreator.js";
import menuLogo from "../img/menu2.png";

export default function createMenuPage() {
  const categories = ["Starters", "Side Dishes", "Main Course", "Deserts"];
  const Foods = {
    Starters: [
      "Baked Chicken Wings.webp",
      "Tomato Soup.jpeg",
      "Teriyaki Chicken.webp",
      "meatballs.jpg",
      "Mashed Potatos.jpg",
      "Fried Chicken.webp",
    ],
    "Side Dishes": [
      "Arancini.webp",
      "Calamari.jpg",
      "Salad.jpeg",
      "Pesto Pasta.webp",
      "Fries.jpg",
      "Fish Sticks.webp",
    ],
    "Main Course": [
      "Beef Stew.jpg",
      "Burger.jpg",
      "White Chicken Chili.webp",
      "Udon Noodles.webp",
      "Spaghetti.jpg",
      "Roasted Chicken.webp",
      "Pork Ribs.jpg",
      "Pizza.jpg",
      "Grilled Fish.jpg",
    ],
    Deserts: ["Ice Cream.webp", "Fruit Salad.jpg", "Chocolate Cake.jpg"],
  };

  const contentContainer = createElement("div", undefined, ["id", "content"]);
  const menuHeader = createElement("header", "menu-header");
  const menuHeaderNav = createElement("nav", "menu-header-nav");
  let div = createElement("div");
  const menuLinks = [
    createElement("a", "no-right-border", ["href", "#"]),
    createElement("a", "active", ["href", "#"]),
    createElement("a", undefined, ["href", "#"]),
  ];
  menuLinks[0].textContent = "Home";
  menuLinks[1].textContent = "Menu";
  menuLinks[2].textContent = "Contact";
  appendChildren(div, menuLinks);
  menuHeaderNav.appendChild(div);
  menuHeader.appendChild(menuHeaderNav);
  const menuHeaderHeader = createElement("header", "menu-header-header");
  const menuHeaderLogo = createElement("img", "menu-header-logo");
  menuHeaderLogo.src = menuLogo;
  menuHeaderHeader.appendChild(menuHeaderLogo);
  menuHeader.appendChild(menuHeaderHeader);
  contentContainer.appendChild(menuHeader);

  const menuNavCategoryNav = createElement("nav", "menu-nav-category-nav");
  categories.forEach((category) => {
    let link = createElement("a", "category-link", [
      "href",
      `#${category.split(" ").join("-")}`,
    ]);
    link.textContent = category;
    menuNavCategoryNav.appendChild(link);
  });
  contentContainer.appendChild(menuNavCategoryNav);

  const menuMain = createElement("main", "menu-main");
  categories.forEach((category) => {
    const menuMainCategory = createElement("section", "menu-main-category", [
      "id",
      `${category.split(" ").join("-")}`,
    ]);
    const menuMainCategoryTitle = createElement(
      "h3",
      "menu-main-category-title"
    );
    menuMainCategoryTitle.textContent = category;
    menuMainCategory.appendChild(menuMainCategoryTitle);
    const menuMainCategoryContent = createElement(
      "div",
      "menu-main-category-content"
    );

    Foods[category].forEach((foodImg) => {
      const foodName = foodImg.split(".")[0];
      const foodCard = createElement("div", "food-card");
      const figure = createElement("figure");
      const img = createElement("img", "food-card-img", ["alt", foodName]);
      img.src = `../src/img/foods/${foodImg}`;
      const figCaption = createElement("figcaption", "food-card-title");
      figCaption.textContent = foodName;
      appendChildren(figure, [img, figCaption]);
      foodCard.appendChild(figure);
      menuMainCategoryContent.appendChild(foodCard);
    });
    menuMainCategory.appendChild(menuMainCategoryContent);
    menuMain.appendChild(menuMainCategory);
  });

  contentContainer.appendChild(menuMain);

  return contentContainer;
}
