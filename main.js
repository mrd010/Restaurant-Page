/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/ElementCreator.js":
/*!***************************************!*\
  !*** ./src/scripts/ElementCreator.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendChildren: () => (/* binding */ appendChildren),
/* harmony export */   createElement: () => (/* binding */ createElement)
/* harmony export */ });
function appendChildren(element, children) {
  children.forEach((child) => element.appendChild(child));
}

function createElement(elementTag, elementClass, ...attributes) {
  const element = document.createElement(elementTag);
  if (elementClass) {
    element.classList.add(elementClass);
  }

  attributes.forEach((attribute) => {
    element.setAttribute(attribute[0], attribute[1]);
  });

  return element;
}


/***/ }),

/***/ "./src/scripts/loaderContact.js":
/*!**************************************!*\
  !*** ./src/scripts/loaderContact.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createContactPage)
/* harmony export */ });
/* harmony import */ var _ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ElementCreator.js */ "./src/scripts/ElementCreator.js");


function createContactPage() {
  const contentContainer = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", undefined, ["id", "content"]);
  const contactHeader = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", "contact-header");
  const contactHeaderNav = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("nav", "contact-header-nav");
  let div = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div");
  const menuLinks = [
    (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", undefined, ["href", "#"]),
    (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", "no-right-border", ["href", "#"]),
    (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", "active", ["href", "#"]),
  ];
  menuLinks[0].textContent = "Home";
  menuLinks[1].textContent = "Menu";
  menuLinks[2].textContent = "Contact";
  (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(div, menuLinks);
  contactHeaderNav.appendChild(div);
  contactHeader.appendChild(contactHeaderNav);
  contentContainer.appendChild(contactHeader);

  const contactMain = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("main", "contact-main");
  const contactForm = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", "contact-form", ["action", ""]);
  const contactFormHeader = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", "contact-form-header");
  contactFormHeader.textContent = "Contact Us";
  contactForm.appendChild(contactFormHeader);
  // name input
  let inputField = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "input-field");
  let label = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", undefined, ["for", "name"]);
  label.textContent = "Name";
  let input = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(
    "input",
    undefined,
    ["type", "text"],
    ["id", "name"],
    ["name", "name"],
    ["placeholder", "Example: John Doe"],
    ["required", true]
  );
  (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(inputField, [label, input]);
  contactForm.appendChild(inputField);
  // mail input
  inputField = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "input-field");
  label = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", undefined, ["for", "email"]);
  label.textContent = "E-mail";
  input = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(
    "input",
    undefined,
    ["type", "email"],
    ["id", "email"],
    ["name", "email"],
    ["placeholder", "Example: example@gmail.com"],
    ["required", true]
  );
  (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(inputField, [label, input]);
  contactForm.appendChild(inputField);
  // message
  inputField = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "input-field");
  label = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", undefined, ["for", "message"]);
  label.textContent = "Message";
  input = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(
    "textarea",
    undefined,
    ["id", "message"],
    ["name", "message"],
    ["placeholder", "Write your message here..."],
    ["required", true]
  );
  (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(inputField, [label, input]);
  contactForm.appendChild(inputField);
  //   submit button
  inputField = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "input-field");
  let submitBtn = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", undefined, ["type", "submit"]);
  submitBtn.textContent = "Send Message";
  inputField.appendChild(submitBtn);
  contactForm.appendChild(inputField);

  contactMain.appendChild(contactForm);
  contentContainer.appendChild(contactMain);

  return contentContainer;
}


/***/ }),

/***/ "./src/scripts/loaderMain.js":
/*!***********************************!*\
  !*** ./src/scripts/loaderMain.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMainPage)
/* harmony export */ });
/* harmony import */ var _ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ElementCreator.js */ "./src/scripts/ElementCreator.js");
/* harmony import */ var _img_fox_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/fox_logo.png */ "./src/img/fox_logo.png");
/* harmony import */ var _img_main_section_1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/main_section_1.jpg */ "./src/img/main_section_1.jpg");
/* harmony import */ var _img_main_section_2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/main_section_2.jpg */ "./src/img/main_section_2.jpg");
/* harmony import */ var _img_cafe_section_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/cafe_section.jpg */ "./src/img/cafe_section.jpg");






function createMainPage() {
  const contentContainer = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", undefined, ["id", "content"]);
  const mainHeader = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", "main-header");
  const mainHeaderNav = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("nav", "main-header-nav");
  let noClass = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div");
  let navLinks = [
    (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", "active", ["href", "#"]),
    (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", undefined, ["href", "#"]),
    (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", undefined, ["href", "#"]),
  ];
  navLinks[0].textContent = "Home";
  navLinks[1].textContent = "Menu";
  navLinks[2].textContent = "Contact";

  (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(noClass, navLinks);
  mainHeaderNav.appendChild(noClass);

  const mainHeaderHeader = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "main-header-header");
  const mainHeaderTitle = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "main-header-title");
  mainHeaderTitle.textContent = "The Pepper Fox";
  const mainHeaderDesc = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "main-header-desc");
  mainHeaderDesc.innerHTML = `Welcome to <strong>Pepper Fox</strong>, a cozy and charming
  restaurant that serves delicious dishes with a touch of spice.
  Pepper Fox is more than just a place to eat, it’s a place to
  experience the warmth and hospitality of the fox family.`;
  const mainHeaderLogo = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "main-header-logo");
  const logoImg = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", "logo");
  logoImg.src = _img_fox_logo_png__WEBPACK_IMPORTED_MODULE_1__;
  mainHeaderLogo.appendChild(logoImg);
  (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(mainHeaderHeader, [
    mainHeaderTitle,
    mainHeaderDesc,
    mainHeaderLogo,
  ]);
  (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(mainHeader, [mainHeaderNav, mainHeaderHeader]);
  contentContainer.appendChild(mainHeader);

  const mainMain = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("main", "main-main");
  const mainIntro = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", "main-intro");
  let mainIntroDesc = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", "main-intro-desc");
  mainIntroDesc.textContent = `At Pepper Fox, you can enjoy a variety of cuisines, from traditional
local dishes to international favorites, all prepared with fresh and
high-quality ingredients. Whether you are looking for a hearty
breakfast, a satisfying lunch, or a romantic dinner, you will find
something to suit your taste and mood at Pepper Fox.`;
  mainIntro.appendChild(mainIntroDesc);
  mainIntroDesc = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", "main-intro-desc");
  mainIntroDesc.textContent = `Pepper Fox is also a place to have fun and relax, with a lively
  atmosphere that reflects the personality of the fox. You can admire
  the beautiful decor, featuring orange and red tones and a cute fox
  logo, while listening to some upbeat music. You can also join in the
  fun activities and events that Pepper Fox organizes regularly, such
  as trivia nights, karaoke nights, and live performances.`;
  mainIntro.appendChild(mainIntroDesc);
  let image = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("img");
  image.src = _img_main_section_1_jpg__WEBPACK_IMPORTED_MODULE_2__;
  mainIntro.appendChild(image);
  mainIntroDesc = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", "main-intro-desc");
  mainIntroDesc.textContent = `Pepper Fox is more than just a restaurant, it’s a community of
  friends and family who share a love for food and fun. Come and join
  us at Pepper Fox, where you will always feel welcome and happy. We
  look forward to seeing you soon!`;
  mainIntro.appendChild(mainIntroDesc);
  mainMain.appendChild(mainIntro);

  let mainSection = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", "main-section");
  let mainSectionHeader = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "main-section-header");
  let h2 = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2");
  h2.textContent = "Dining Lodge";
  image = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("img");
  image.src = _img_main_section_2_jpg__WEBPACK_IMPORTED_MODULE_3__;
  (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(mainSectionHeader, [h2, image]);
  let mainSectionDesc = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", "main-section-desc");
  mainSectionDesc.textContent = `If you are looking for a more casual and familiar dining experience,
  you can check out our main section, where we serve a range of normal
  foods that are sure to satisfy your appetite. Our main section
  offers a variety of dishes, from burgers and sandwiches to salads
  and soups, all made with fresh and quality ingredients. You can also
  choose from our selection of drinks, such as coffee, tea, juice, or
  soda, to complement your meal. Our main section is open for
  breakfast, lunch, and dinner, and you can enjoy your food in a
  comfortable and relaxed setting. Whether you want a quick bite or a
  leisurely meal, our main section is the perfect place for you.`;
  (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(mainSection, [mainSectionHeader, mainSectionDesc]);
  mainMain.appendChild(mainSection);

  mainSection = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", "main-section");
  mainSectionHeader = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "main-section-header");
  h2 = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2");
  h2.textContent = "Cafeteria";
  image = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("img");
  image.src = _img_cafe_section_jpg__WEBPACK_IMPORTED_MODULE_4__;
  (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(mainSectionHeader, [h2, image]);
  mainSectionDesc = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", "main-section-desc");
  mainSectionDesc.textContent = `If you are looking for a more cozy and intimate dining experience,
  you can check out our cafeteria section, where we serve a range of
  snacks and desserts that are sure to delight your taste buds. Our
  cafeteria section offers a variety of treats, from cakes and cookies
  to ice cream and smoothies, all made with fresh and natural
  ingredients. You can also choose from our selection of hot and cold
  beverages, such as espresso, latte, cappuccino, or milkshake, to
  enjoy with your snack. Our cafeteria section is open for all day,
  and you can enjoy your treat in a warm and inviting setting. Whether
  you want a sweet indulgence or a refreshing break, our cafeteria
  section is the perfect place for you.`;
  (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(mainSection, [mainSectionHeader, mainSectionDesc]);
  mainMain.appendChild(mainSection);

  const mainComments = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", "main-comments");
  h2 = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2");
  h2.innerHTML = "Others also think we are the <strong>best</strong>";
  let list = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul");
  let commentList = [
    (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", "comment"),
    (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", "comment"),
    (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", "comment"),
  ];
  let bq = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("blockquote");
  bq.textContent = `“I had a great time at Pepper Fox. The food was delicious and
  the service was friendly. I loved the fox theme and the decor.
  It was a cozy and charming place to eat and have fun. I would
  definitely recommend it to anyone who is looking for a good
  restaurant in Mashhad.”`;
  let span = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", "reviewer");
  span.textContent = "Sara, TripAdvisor";
  (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(commentList[0], [bq, span]);
  bq = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("blockquote");
  bq.textContent = `“Pepper Fox is one of my favorite restaurants in Mashhad. The
  food is always fresh and tasty, and the portions are generous.
  The staff is attentive and helpful, and the atmosphere is lively
  and colorful. I especially enjoyed the trivia night and the
  karaoke night, they were so much fun. Pepper Fox is a must-visit
  for anyone who loves food and fun.”`;
  span = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", "reviewer");
  span.textContent = "Ali, Google Reviews";
  (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(commentList[1], [bq, span]);
  bq = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("blockquote");
  bq.textContent = `“Pepper Fox is a gem of a restaurant in Mashhad. The food is
  amazing and the prices are reasonable. The menu has a lot of
  variety, from Iranian dishes to international dishes, and
  everything is cooked with a touch of spice. The desserts are
  also heavenly, I loved the ice cream and the smoothies. The
  restaurant has a fox theme, which is very cute and original. The
  music is upbeat and the events are entertaining. Pepper Fox is a
  great place to hang out with friends and family.”`;
  span = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", "reviewer");
  span.textContent = "Maryam, Yelp";
  (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(commentList[2], [bq, span]);
  (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(list, commentList);
  (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(mainComments, [h2, list]);
  mainMain.appendChild(mainComments);
  contentContainer.appendChild(mainMain);
  return contentContainer;
  // print ##########################################
}


/***/ }),

/***/ "./src/scripts/loaderMenu.js":
/*!***********************************!*\
  !*** ./src/scripts/loaderMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMenuPage)
/* harmony export */ });
/* harmony import */ var _ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ElementCreator.js */ "./src/scripts/ElementCreator.js");
/* harmony import */ var _img_menu2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/menu2.png */ "./src/img/menu2.png");



function createMenuPage() {
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

  const contentContainer = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", undefined, ["id", "content"]);
  const menuHeader = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", "menu-header");
  const menuHeaderNav = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("nav", "menu-header-nav");
  let div = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div");
  const menuLinks = [
    (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", "no-right-border", ["href", "#"]),
    (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", "active", ["href", "#"]),
    (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", undefined, ["href", "#"]),
  ];
  menuLinks[0].textContent = "Home";
  menuLinks[1].textContent = "Menu";
  menuLinks[2].textContent = "Contact";
  (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(div, menuLinks);
  menuHeaderNav.appendChild(div);
  menuHeader.appendChild(menuHeaderNav);
  const menuHeaderHeader = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", "menu-header-header");
  const menuHeaderLogo = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", "menu-header-logo");
  menuHeaderLogo.src = _img_menu2_png__WEBPACK_IMPORTED_MODULE_1__;
  menuHeaderHeader.appendChild(menuHeaderLogo);
  menuHeader.appendChild(menuHeaderHeader);
  contentContainer.appendChild(menuHeader);

  const menuNavCategoryNav = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("nav", "menu-nav-category-nav");
  categories.forEach((category) => {
    let link = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", "category-link", [
      "href",
      `#${category.split(" ").join("-")}`,
    ]);
    link.textContent = category;
    menuNavCategoryNav.appendChild(link);
  });
  contentContainer.appendChild(menuNavCategoryNav);

  const menuMain = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("main", "menu-main");
  categories.forEach((category) => {
    const menuMainCategory = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", "menu-main-category", [
      "id",
      `${category.split(" ").join("-")}`,
    ]);
    const menuMainCategoryTitle = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "h3",
      "menu-main-category-title"
    );
    menuMainCategoryTitle.textContent = category;
    menuMainCategory.appendChild(menuMainCategoryTitle);
    const menuMainCategoryContent = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "div",
      "menu-main-category-content"
    );

    Foods[category].forEach((foodImg) => {
      const foodName = foodImg.split(".")[0];
      const foodCard = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "food-card");
      const figure = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure");
      const img = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", "food-card-img", ["alt", foodName]);
      img.src = `../src/img/foods/${foodImg}`;
      const figCaption = (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("figcaption", "food-card-title");
      figCaption.textContent = foodName;
      (0,_ElementCreator_js__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(figure, [img, figCaption]);
      foodCard.appendChild(figure);
      menuMainCategoryContent.appendChild(foodCard);
    });
    menuMainCategory.appendChild(menuMainCategoryContent);
    menuMain.appendChild(menuMainCategory);
  });

  contentContainer.appendChild(menuMain);

  return contentContainer;
}


/***/ }),

/***/ "./src/img/cafe_section.jpg":
/*!**********************************!*\
  !*** ./src/img/cafe_section.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "69cacd390dd80ca5f46e.jpg";

/***/ }),

/***/ "./src/img/fox_logo.png":
/*!******************************!*\
  !*** ./src/img/fox_logo.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0cdeb25440bec2eb5662.png";

/***/ }),

/***/ "./src/img/main_section_1.jpg":
/*!************************************!*\
  !*** ./src/img/main_section_1.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "295dfd1fa5ea3b77db2d.jpg";

/***/ }),

/***/ "./src/img/main_section_2.jpg":
/*!************************************!*\
  !*** ./src/img/main_section_2.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b63c574f9251103c1676.jpg";

/***/ }),

/***/ "./src/img/menu2.png":
/*!***************************!*\
  !*** ./src/img/menu2.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "90237b57c5d2de493e18.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_loaderContact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/loaderContact.js */ "./src/scripts/loaderContact.js");
/* harmony import */ var _scripts_loaderMain_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/loaderMain.js */ "./src/scripts/loaderMain.js");
/* harmony import */ var _scripts_loaderMenu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/loaderMenu.js */ "./src/scripts/loaderMenu.js");




function loadMainPage() {
  const oldContent = document.querySelector("#content");
  const newContent = (0,_scripts_loaderMain_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  oldContent.remove();
  document.body.append(newContent);
  addEventListeners();
}

function loadMenuPage() {
  const oldContent = document.querySelector("#content");
  const newContent = (0,_scripts_loaderMenu_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  oldContent.remove();
  document.body.append(newContent);
  addEventListeners();
}

function loadContactPage() {
  const oldContent = document.querySelector("#content");
  const newContent = (0,_scripts_loaderContact_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xCMkQ7QUFDTjtBQUNBOztBQUVyRDtBQUNBO0FBQ0EscUJBQXFCLGtFQUFjO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsa0VBQWM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixxRUFBaUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc2NyaXB0cy9FbGVtZW50Q3JlYXRvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc2NyaXB0cy9sb2FkZXJDb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zY3JpcHRzL2xvYWRlck1haW4uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3NjcmlwdHMvbG9hZGVyTWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBhcHBlbmRDaGlsZHJlbihlbGVtZW50LCBjaGlsZHJlbikge1xuICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudChlbGVtZW50VGFnLCBlbGVtZW50Q2xhc3MsIC4uLmF0dHJpYnV0ZXMpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFRhZyk7XG4gIGlmIChlbGVtZW50Q2xhc3MpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoZWxlbWVudENsYXNzKTtcbiAgfVxuXG4gIGF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlWzBdLCBhdHRyaWJ1dGVbMV0pO1xuICB9KTtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGFwcGVuZENoaWxkcmVuIH0gZnJvbSBcIi4vRWxlbWVudENyZWF0b3IuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ29udGFjdFBhZ2UoKSB7XG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHVuZGVmaW5lZCwgW1wiaWRcIiwgXCJjb250ZW50XCJdKTtcbiAgY29uc3QgY29udGFjdEhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIiwgXCJjb250YWN0LWhlYWRlclwiKTtcbiAgY29uc3QgY29udGFjdEhlYWRlck5hdiA9IGNyZWF0ZUVsZW1lbnQoXCJuYXZcIiwgXCJjb250YWN0LWhlYWRlci1uYXZcIik7XG4gIGxldCBkaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBtZW51TGlua3MgPSBbXG4gICAgY3JlYXRlRWxlbWVudChcImFcIiwgdW5kZWZpbmVkLCBbXCJocmVmXCIsIFwiI1wiXSksXG4gICAgY3JlYXRlRWxlbWVudChcImFcIiwgXCJuby1yaWdodC1ib3JkZXJcIiwgW1wiaHJlZlwiLCBcIiNcIl0pLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJhXCIsIFwiYWN0aXZlXCIsIFtcImhyZWZcIiwgXCIjXCJdKSxcbiAgXTtcbiAgbWVudUxpbmtzWzBdLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gIG1lbnVMaW5rc1sxXS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICBtZW51TGlua3NbMl0udGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgYXBwZW5kQ2hpbGRyZW4oZGl2LCBtZW51TGlua3MpO1xuICBjb250YWN0SGVhZGVyTmF2LmFwcGVuZENoaWxkKGRpdik7XG4gIGNvbnRhY3RIZWFkZXIuYXBwZW5kQ2hpbGQoY29udGFjdEhlYWRlck5hdik7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdEhlYWRlcik7XG5cbiAgY29uc3QgY29udGFjdE1haW4gPSBjcmVhdGVFbGVtZW50KFwibWFpblwiLCBcImNvbnRhY3QtbWFpblwiKTtcbiAgY29uc3QgY29udGFjdEZvcm0gPSBjcmVhdGVFbGVtZW50KFwiZm9ybVwiLCBcImNvbnRhY3QtZm9ybVwiLCBbXCJhY3Rpb25cIiwgXCJcIl0pO1xuICBjb25zdCBjb250YWN0Rm9ybUhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBcImNvbnRhY3QtZm9ybS1oZWFkZXJcIik7XG4gIGNvbnRhY3RGb3JtSGVhZGVyLnRleHRDb250ZW50ID0gXCJDb250YWN0IFVzXCI7XG4gIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGNvbnRhY3RGb3JtSGVhZGVyKTtcbiAgLy8gbmFtZSBpbnB1dFxuICBsZXQgaW5wdXRGaWVsZCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJpbnB1dC1maWVsZFwiKTtcbiAgbGV0IGxhYmVsID0gY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHVuZGVmaW5lZCwgW1wiZm9yXCIsIFwibmFtZVwiXSk7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gXCJOYW1lXCI7XG4gIGxldCBpbnB1dCA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgXCJpbnB1dFwiLFxuICAgIHVuZGVmaW5lZCxcbiAgICBbXCJ0eXBlXCIsIFwidGV4dFwiXSxcbiAgICBbXCJpZFwiLCBcIm5hbWVcIl0sXG4gICAgW1wibmFtZVwiLCBcIm5hbWVcIl0sXG4gICAgW1wicGxhY2Vob2xkZXJcIiwgXCJFeGFtcGxlOiBKb2huIERvZVwiXSxcbiAgICBbXCJyZXF1aXJlZFwiLCB0cnVlXVxuICApO1xuICBhcHBlbmRDaGlsZHJlbihpbnB1dEZpZWxkLCBbbGFiZWwsIGlucHV0XSk7XG4gIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGlucHV0RmllbGQpO1xuICAvLyBtYWlsIGlucHV0XG4gIGlucHV0RmllbGQgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiaW5wdXQtZmllbGRcIik7XG4gIGxhYmVsID0gY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHVuZGVmaW5lZCwgW1wiZm9yXCIsIFwiZW1haWxcIl0pO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IFwiRS1tYWlsXCI7XG4gIGlucHV0ID0gY3JlYXRlRWxlbWVudChcbiAgICBcImlucHV0XCIsXG4gICAgdW5kZWZpbmVkLFxuICAgIFtcInR5cGVcIiwgXCJlbWFpbFwiXSxcbiAgICBbXCJpZFwiLCBcImVtYWlsXCJdLFxuICAgIFtcIm5hbWVcIiwgXCJlbWFpbFwiXSxcbiAgICBbXCJwbGFjZWhvbGRlclwiLCBcIkV4YW1wbGU6IGV4YW1wbGVAZ21haWwuY29tXCJdLFxuICAgIFtcInJlcXVpcmVkXCIsIHRydWVdXG4gICk7XG4gIGFwcGVuZENoaWxkcmVuKGlucHV0RmllbGQsIFtsYWJlbCwgaW5wdXRdKTtcbiAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRGaWVsZCk7XG4gIC8vIG1lc3NhZ2VcbiAgaW5wdXRGaWVsZCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJpbnB1dC1maWVsZFwiKTtcbiAgbGFiZWwgPSBjcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgdW5kZWZpbmVkLCBbXCJmb3JcIiwgXCJtZXNzYWdlXCJdKTtcbiAgbGFiZWwudGV4dENvbnRlbnQgPSBcIk1lc3NhZ2VcIjtcbiAgaW5wdXQgPSBjcmVhdGVFbGVtZW50KFxuICAgIFwidGV4dGFyZWFcIixcbiAgICB1bmRlZmluZWQsXG4gICAgW1wiaWRcIiwgXCJtZXNzYWdlXCJdLFxuICAgIFtcIm5hbWVcIiwgXCJtZXNzYWdlXCJdLFxuICAgIFtcInBsYWNlaG9sZGVyXCIsIFwiV3JpdGUgeW91ciBtZXNzYWdlIGhlcmUuLi5cIl0sXG4gICAgW1wicmVxdWlyZWRcIiwgdHJ1ZV1cbiAgKTtcbiAgYXBwZW5kQ2hpbGRyZW4oaW5wdXRGaWVsZCwgW2xhYmVsLCBpbnB1dF0pO1xuICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChpbnB1dEZpZWxkKTtcbiAgLy8gICBzdWJtaXQgYnV0dG9uXG4gIGlucHV0RmllbGQgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiaW5wdXQtZmllbGRcIik7XG4gIGxldCBzdWJtaXRCdG4gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHVuZGVmaW5lZCwgW1widHlwZVwiLCBcInN1Ym1pdFwiXSk7XG4gIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiU2VuZCBNZXNzYWdlXCI7XG4gIGlucHV0RmllbGQuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcbiAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRGaWVsZCk7XG5cbiAgY29udGFjdE1haW4uYXBwZW5kQ2hpbGQoY29udGFjdEZvcm0pO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RNYWluKTtcblxuICByZXR1cm4gY29udGVudENvbnRhaW5lcjtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGFwcGVuZENoaWxkcmVuIH0gZnJvbSBcIi4vRWxlbWVudENyZWF0b3IuanNcIjtcbmltcG9ydCBsb2dvIGZyb20gXCIuLi9pbWcvZm94X2xvZ28ucG5nXCI7XG5pbXBvcnQgbWFpblNlY3Rpb25JbWFnZTEgZnJvbSBcIi4uL2ltZy9tYWluX3NlY3Rpb25fMS5qcGdcIjtcbmltcG9ydCBtYWluU2VjdGlvbkltYWdlMiBmcm9tIFwiLi4vaW1nL21haW5fc2VjdGlvbl8yLmpwZ1wiO1xuaW1wb3J0IGNhZmVTZWN0aW9uSW1hZ2UgZnJvbSBcIi4uL2ltZy9jYWZlX3NlY3Rpb24uanBnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1haW5QYWdlKCkge1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB1bmRlZmluZWQsIFtcImlkXCIsIFwiY29udGVudFwiXSk7XG4gIGNvbnN0IG1haW5IZWFkZXIgPSBjcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIsIFwibWFpbi1oZWFkZXJcIik7XG4gIGNvbnN0IG1haW5IZWFkZXJOYXYgPSBjcmVhdGVFbGVtZW50KFwibmF2XCIsIFwibWFpbi1oZWFkZXItbmF2XCIpO1xuICBsZXQgbm9DbGFzcyA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCBuYXZMaW5rcyA9IFtcbiAgICBjcmVhdGVFbGVtZW50KFwiYVwiLCBcImFjdGl2ZVwiLCBbXCJocmVmXCIsIFwiI1wiXSksXG4gICAgY3JlYXRlRWxlbWVudChcImFcIiwgdW5kZWZpbmVkLCBbXCJocmVmXCIsIFwiI1wiXSksXG4gICAgY3JlYXRlRWxlbWVudChcImFcIiwgdW5kZWZpbmVkLCBbXCJocmVmXCIsIFwiI1wiXSksXG4gIF07XG4gIG5hdkxpbmtzWzBdLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gIG5hdkxpbmtzWzFdLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gIG5hdkxpbmtzWzJdLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG5cbiAgYXBwZW5kQ2hpbGRyZW4obm9DbGFzcywgbmF2TGlua3MpO1xuICBtYWluSGVhZGVyTmF2LmFwcGVuZENoaWxkKG5vQ2xhc3MpO1xuXG4gIGNvbnN0IG1haW5IZWFkZXJIZWFkZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibWFpbi1oZWFkZXItaGVhZGVyXCIpO1xuICBjb25zdCBtYWluSGVhZGVyVGl0bGUgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibWFpbi1oZWFkZXItdGl0bGVcIik7XG4gIG1haW5IZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9IFwiVGhlIFBlcHBlciBGb3hcIjtcbiAgY29uc3QgbWFpbkhlYWRlckRlc2MgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibWFpbi1oZWFkZXItZGVzY1wiKTtcbiAgbWFpbkhlYWRlckRlc2MuaW5uZXJIVE1MID0gYFdlbGNvbWUgdG8gPHN0cm9uZz5QZXBwZXIgRm94PC9zdHJvbmc+LCBhIGNvenkgYW5kIGNoYXJtaW5nXG4gIHJlc3RhdXJhbnQgdGhhdCBzZXJ2ZXMgZGVsaWNpb3VzIGRpc2hlcyB3aXRoIGEgdG91Y2ggb2Ygc3BpY2UuXG4gIFBlcHBlciBGb3ggaXMgbW9yZSB0aGFuIGp1c3QgYSBwbGFjZSB0byBlYXQsIGl04oCZcyBhIHBsYWNlIHRvXG4gIGV4cGVyaWVuY2UgdGhlIHdhcm10aCBhbmQgaG9zcGl0YWxpdHkgb2YgdGhlIGZveCBmYW1pbHkuYDtcbiAgY29uc3QgbWFpbkhlYWRlckxvZ28gPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibWFpbi1oZWFkZXItbG9nb1wiKTtcbiAgY29uc3QgbG9nb0ltZyA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgXCJsb2dvXCIpO1xuICBsb2dvSW1nLnNyYyA9IGxvZ287XG4gIG1haW5IZWFkZXJMb2dvLmFwcGVuZENoaWxkKGxvZ29JbWcpO1xuICBhcHBlbmRDaGlsZHJlbihtYWluSGVhZGVySGVhZGVyLCBbXG4gICAgbWFpbkhlYWRlclRpdGxlLFxuICAgIG1haW5IZWFkZXJEZXNjLFxuICAgIG1haW5IZWFkZXJMb2dvLFxuICBdKTtcbiAgYXBwZW5kQ2hpbGRyZW4obWFpbkhlYWRlciwgW21haW5IZWFkZXJOYXYsIG1haW5IZWFkZXJIZWFkZXJdKTtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluSGVhZGVyKTtcblxuICBjb25zdCBtYWluTWFpbiA9IGNyZWF0ZUVsZW1lbnQoXCJtYWluXCIsIFwibWFpbi1tYWluXCIpO1xuICBjb25zdCBtYWluSW50cm8gPSBjcmVhdGVFbGVtZW50KFwic2VjdGlvblwiLCBcIm1haW4taW50cm9cIik7XG4gIGxldCBtYWluSW50cm9EZXNjID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJtYWluLWludHJvLWRlc2NcIik7XG4gIG1haW5JbnRyb0Rlc2MudGV4dENvbnRlbnQgPSBgQXQgUGVwcGVyIEZveCwgeW91IGNhbiBlbmpveSBhIHZhcmlldHkgb2YgY3Vpc2luZXMsIGZyb20gdHJhZGl0aW9uYWxcbmxvY2FsIGRpc2hlcyB0byBpbnRlcm5hdGlvbmFsIGZhdm9yaXRlcywgYWxsIHByZXBhcmVkIHdpdGggZnJlc2ggYW5kXG5oaWdoLXF1YWxpdHkgaW5ncmVkaWVudHMuIFdoZXRoZXIgeW91IGFyZSBsb29raW5nIGZvciBhIGhlYXJ0eVxuYnJlYWtmYXN0LCBhIHNhdGlzZnlpbmcgbHVuY2gsIG9yIGEgcm9tYW50aWMgZGlubmVyLCB5b3Ugd2lsbCBmaW5kXG5zb21ldGhpbmcgdG8gc3VpdCB5b3VyIHRhc3RlIGFuZCBtb29kIGF0IFBlcHBlciBGb3guYDtcbiAgbWFpbkludHJvLmFwcGVuZENoaWxkKG1haW5JbnRyb0Rlc2MpO1xuICBtYWluSW50cm9EZXNjID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJtYWluLWludHJvLWRlc2NcIik7XG4gIG1haW5JbnRyb0Rlc2MudGV4dENvbnRlbnQgPSBgUGVwcGVyIEZveCBpcyBhbHNvIGEgcGxhY2UgdG8gaGF2ZSBmdW4gYW5kIHJlbGF4LCB3aXRoIGEgbGl2ZWx5XG4gIGF0bW9zcGhlcmUgdGhhdCByZWZsZWN0cyB0aGUgcGVyc29uYWxpdHkgb2YgdGhlIGZveC4gWW91IGNhbiBhZG1pcmVcbiAgdGhlIGJlYXV0aWZ1bCBkZWNvciwgZmVhdHVyaW5nIG9yYW5nZSBhbmQgcmVkIHRvbmVzIGFuZCBhIGN1dGUgZm94XG4gIGxvZ28sIHdoaWxlIGxpc3RlbmluZyB0byBzb21lIHVwYmVhdCBtdXNpYy4gWW91IGNhbiBhbHNvIGpvaW4gaW4gdGhlXG4gIGZ1biBhY3Rpdml0aWVzIGFuZCBldmVudHMgdGhhdCBQZXBwZXIgRm94IG9yZ2FuaXplcyByZWd1bGFybHksIHN1Y2hcbiAgYXMgdHJpdmlhIG5pZ2h0cywga2FyYW9rZSBuaWdodHMsIGFuZCBsaXZlIHBlcmZvcm1hbmNlcy5gO1xuICBtYWluSW50cm8uYXBwZW5kQ2hpbGQobWFpbkludHJvRGVzYyk7XG4gIGxldCBpbWFnZSA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltYWdlLnNyYyA9IG1haW5TZWN0aW9uSW1hZ2UxO1xuICBtYWluSW50cm8uYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICBtYWluSW50cm9EZXNjID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJtYWluLWludHJvLWRlc2NcIik7XG4gIG1haW5JbnRyb0Rlc2MudGV4dENvbnRlbnQgPSBgUGVwcGVyIEZveCBpcyBtb3JlIHRoYW4ganVzdCBhIHJlc3RhdXJhbnQsIGl04oCZcyBhIGNvbW11bml0eSBvZlxuICBmcmllbmRzIGFuZCBmYW1pbHkgd2hvIHNoYXJlIGEgbG92ZSBmb3IgZm9vZCBhbmQgZnVuLiBDb21lIGFuZCBqb2luXG4gIHVzIGF0IFBlcHBlciBGb3gsIHdoZXJlIHlvdSB3aWxsIGFsd2F5cyBmZWVsIHdlbGNvbWUgYW5kIGhhcHB5LiBXZVxuICBsb29rIGZvcndhcmQgdG8gc2VlaW5nIHlvdSBzb29uIWA7XG4gIG1haW5JbnRyby5hcHBlbmRDaGlsZChtYWluSW50cm9EZXNjKTtcbiAgbWFpbk1haW4uYXBwZW5kQ2hpbGQobWFpbkludHJvKTtcblxuICBsZXQgbWFpblNlY3Rpb24gPSBjcmVhdGVFbGVtZW50KFwic2VjdGlvblwiLCBcIm1haW4tc2VjdGlvblwiKTtcbiAgbGV0IG1haW5TZWN0aW9uSGVhZGVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIm1haW4tc2VjdGlvbi1oZWFkZXJcIik7XG4gIGxldCBoMiA9IGNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgaDIudGV4dENvbnRlbnQgPSBcIkRpbmluZyBMb2RnZVwiO1xuICBpbWFnZSA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltYWdlLnNyYyA9IG1haW5TZWN0aW9uSW1hZ2UyO1xuICBhcHBlbmRDaGlsZHJlbihtYWluU2VjdGlvbkhlYWRlciwgW2gyLCBpbWFnZV0pO1xuICBsZXQgbWFpblNlY3Rpb25EZXNjID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJtYWluLXNlY3Rpb24tZGVzY1wiKTtcbiAgbWFpblNlY3Rpb25EZXNjLnRleHRDb250ZW50ID0gYElmIHlvdSBhcmUgbG9va2luZyBmb3IgYSBtb3JlIGNhc3VhbCBhbmQgZmFtaWxpYXIgZGluaW5nIGV4cGVyaWVuY2UsXG4gIHlvdSBjYW4gY2hlY2sgb3V0IG91ciBtYWluIHNlY3Rpb24sIHdoZXJlIHdlIHNlcnZlIGEgcmFuZ2Ugb2Ygbm9ybWFsXG4gIGZvb2RzIHRoYXQgYXJlIHN1cmUgdG8gc2F0aXNmeSB5b3VyIGFwcGV0aXRlLiBPdXIgbWFpbiBzZWN0aW9uXG4gIG9mZmVycyBhIHZhcmlldHkgb2YgZGlzaGVzLCBmcm9tIGJ1cmdlcnMgYW5kIHNhbmR3aWNoZXMgdG8gc2FsYWRzXG4gIGFuZCBzb3VwcywgYWxsIG1hZGUgd2l0aCBmcmVzaCBhbmQgcXVhbGl0eSBpbmdyZWRpZW50cy4gWW91IGNhbiBhbHNvXG4gIGNob29zZSBmcm9tIG91ciBzZWxlY3Rpb24gb2YgZHJpbmtzLCBzdWNoIGFzIGNvZmZlZSwgdGVhLCBqdWljZSwgb3JcbiAgc29kYSwgdG8gY29tcGxlbWVudCB5b3VyIG1lYWwuIE91ciBtYWluIHNlY3Rpb24gaXMgb3BlbiBmb3JcbiAgYnJlYWtmYXN0LCBsdW5jaCwgYW5kIGRpbm5lciwgYW5kIHlvdSBjYW4gZW5qb3kgeW91ciBmb29kIGluIGFcbiAgY29tZm9ydGFibGUgYW5kIHJlbGF4ZWQgc2V0dGluZy4gV2hldGhlciB5b3Ugd2FudCBhIHF1aWNrIGJpdGUgb3IgYVxuICBsZWlzdXJlbHkgbWVhbCwgb3VyIG1haW4gc2VjdGlvbiBpcyB0aGUgcGVyZmVjdCBwbGFjZSBmb3IgeW91LmA7XG4gIGFwcGVuZENoaWxkcmVuKG1haW5TZWN0aW9uLCBbbWFpblNlY3Rpb25IZWFkZXIsIG1haW5TZWN0aW9uRGVzY10pO1xuICBtYWluTWFpbi5hcHBlbmRDaGlsZChtYWluU2VjdGlvbik7XG5cbiAgbWFpblNlY3Rpb24gPSBjcmVhdGVFbGVtZW50KFwic2VjdGlvblwiLCBcIm1haW4tc2VjdGlvblwiKTtcbiAgbWFpblNlY3Rpb25IZWFkZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibWFpbi1zZWN0aW9uLWhlYWRlclwiKTtcbiAgaDIgPSBjcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGgyLnRleHRDb250ZW50ID0gXCJDYWZldGVyaWFcIjtcbiAgaW1hZ2UgPSBjcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWFnZS5zcmMgPSBjYWZlU2VjdGlvbkltYWdlO1xuICBhcHBlbmRDaGlsZHJlbihtYWluU2VjdGlvbkhlYWRlciwgW2gyLCBpbWFnZV0pO1xuICBtYWluU2VjdGlvbkRlc2MgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcIm1haW4tc2VjdGlvbi1kZXNjXCIpO1xuICBtYWluU2VjdGlvbkRlc2MudGV4dENvbnRlbnQgPSBgSWYgeW91IGFyZSBsb29raW5nIGZvciBhIG1vcmUgY296eSBhbmQgaW50aW1hdGUgZGluaW5nIGV4cGVyaWVuY2UsXG4gIHlvdSBjYW4gY2hlY2sgb3V0IG91ciBjYWZldGVyaWEgc2VjdGlvbiwgd2hlcmUgd2Ugc2VydmUgYSByYW5nZSBvZlxuICBzbmFja3MgYW5kIGRlc3NlcnRzIHRoYXQgYXJlIHN1cmUgdG8gZGVsaWdodCB5b3VyIHRhc3RlIGJ1ZHMuIE91clxuICBjYWZldGVyaWEgc2VjdGlvbiBvZmZlcnMgYSB2YXJpZXR5IG9mIHRyZWF0cywgZnJvbSBjYWtlcyBhbmQgY29va2llc1xuICB0byBpY2UgY3JlYW0gYW5kIHNtb290aGllcywgYWxsIG1hZGUgd2l0aCBmcmVzaCBhbmQgbmF0dXJhbFxuICBpbmdyZWRpZW50cy4gWW91IGNhbiBhbHNvIGNob29zZSBmcm9tIG91ciBzZWxlY3Rpb24gb2YgaG90IGFuZCBjb2xkXG4gIGJldmVyYWdlcywgc3VjaCBhcyBlc3ByZXNzbywgbGF0dGUsIGNhcHB1Y2Npbm8sIG9yIG1pbGtzaGFrZSwgdG9cbiAgZW5qb3kgd2l0aCB5b3VyIHNuYWNrLiBPdXIgY2FmZXRlcmlhIHNlY3Rpb24gaXMgb3BlbiBmb3IgYWxsIGRheSxcbiAgYW5kIHlvdSBjYW4gZW5qb3kgeW91ciB0cmVhdCBpbiBhIHdhcm0gYW5kIGludml0aW5nIHNldHRpbmcuIFdoZXRoZXJcbiAgeW91IHdhbnQgYSBzd2VldCBpbmR1bGdlbmNlIG9yIGEgcmVmcmVzaGluZyBicmVhaywgb3VyIGNhZmV0ZXJpYVxuICBzZWN0aW9uIGlzIHRoZSBwZXJmZWN0IHBsYWNlIGZvciB5b3UuYDtcbiAgYXBwZW5kQ2hpbGRyZW4obWFpblNlY3Rpb24sIFttYWluU2VjdGlvbkhlYWRlciwgbWFpblNlY3Rpb25EZXNjXSk7XG4gIG1haW5NYWluLmFwcGVuZENoaWxkKG1haW5TZWN0aW9uKTtcblxuICBjb25zdCBtYWluQ29tbWVudHMgPSBjcmVhdGVFbGVtZW50KFwic2VjdGlvblwiLCBcIm1haW4tY29tbWVudHNcIik7XG4gIGgyID0gY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBoMi5pbm5lckhUTUwgPSBcIk90aGVycyBhbHNvIHRoaW5rIHdlIGFyZSB0aGUgPHN0cm9uZz5iZXN0PC9zdHJvbmc+XCI7XG4gIGxldCBsaXN0ID0gY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBsZXQgY29tbWVudExpc3QgPSBbXG4gICAgY3JlYXRlRWxlbWVudChcImxpXCIsIFwiY29tbWVudFwiKSxcbiAgICBjcmVhdGVFbGVtZW50KFwibGlcIiwgXCJjb21tZW50XCIpLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBcImNvbW1lbnRcIiksXG4gIF07XG4gIGxldCBicSA9IGNyZWF0ZUVsZW1lbnQoXCJibG9ja3F1b3RlXCIpO1xuICBicS50ZXh0Q29udGVudCA9IGDigJxJIGhhZCBhIGdyZWF0IHRpbWUgYXQgUGVwcGVyIEZveC4gVGhlIGZvb2Qgd2FzIGRlbGljaW91cyBhbmRcbiAgdGhlIHNlcnZpY2Ugd2FzIGZyaWVuZGx5LiBJIGxvdmVkIHRoZSBmb3ggdGhlbWUgYW5kIHRoZSBkZWNvci5cbiAgSXQgd2FzIGEgY296eSBhbmQgY2hhcm1pbmcgcGxhY2UgdG8gZWF0IGFuZCBoYXZlIGZ1bi4gSSB3b3VsZFxuICBkZWZpbml0ZWx5IHJlY29tbWVuZCBpdCB0byBhbnlvbmUgd2hvIGlzIGxvb2tpbmcgZm9yIGEgZ29vZFxuICByZXN0YXVyYW50IGluIE1hc2hoYWQu4oCdYDtcbiAgbGV0IHNwYW4gPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcInJldmlld2VyXCIpO1xuICBzcGFuLnRleHRDb250ZW50ID0gXCJTYXJhLCBUcmlwQWR2aXNvclwiO1xuICBhcHBlbmRDaGlsZHJlbihjb21tZW50TGlzdFswXSwgW2JxLCBzcGFuXSk7XG4gIGJxID0gY3JlYXRlRWxlbWVudChcImJsb2NrcXVvdGVcIik7XG4gIGJxLnRleHRDb250ZW50ID0gYOKAnFBlcHBlciBGb3ggaXMgb25lIG9mIG15IGZhdm9yaXRlIHJlc3RhdXJhbnRzIGluIE1hc2hoYWQuIFRoZVxuICBmb29kIGlzIGFsd2F5cyBmcmVzaCBhbmQgdGFzdHksIGFuZCB0aGUgcG9ydGlvbnMgYXJlIGdlbmVyb3VzLlxuICBUaGUgc3RhZmYgaXMgYXR0ZW50aXZlIGFuZCBoZWxwZnVsLCBhbmQgdGhlIGF0bW9zcGhlcmUgaXMgbGl2ZWx5XG4gIGFuZCBjb2xvcmZ1bC4gSSBlc3BlY2lhbGx5IGVuam95ZWQgdGhlIHRyaXZpYSBuaWdodCBhbmQgdGhlXG4gIGthcmFva2UgbmlnaHQsIHRoZXkgd2VyZSBzbyBtdWNoIGZ1bi4gUGVwcGVyIEZveCBpcyBhIG11c3QtdmlzaXRcbiAgZm9yIGFueW9uZSB3aG8gbG92ZXMgZm9vZCBhbmQgZnVuLuKAnWA7XG4gIHNwYW4gPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcInJldmlld2VyXCIpO1xuICBzcGFuLnRleHRDb250ZW50ID0gXCJBbGksIEdvb2dsZSBSZXZpZXdzXCI7XG4gIGFwcGVuZENoaWxkcmVuKGNvbW1lbnRMaXN0WzFdLCBbYnEsIHNwYW5dKTtcbiAgYnEgPSBjcmVhdGVFbGVtZW50KFwiYmxvY2txdW90ZVwiKTtcbiAgYnEudGV4dENvbnRlbnQgPSBg4oCcUGVwcGVyIEZveCBpcyBhIGdlbSBvZiBhIHJlc3RhdXJhbnQgaW4gTWFzaGhhZC4gVGhlIGZvb2QgaXNcbiAgYW1hemluZyBhbmQgdGhlIHByaWNlcyBhcmUgcmVhc29uYWJsZS4gVGhlIG1lbnUgaGFzIGEgbG90IG9mXG4gIHZhcmlldHksIGZyb20gSXJhbmlhbiBkaXNoZXMgdG8gaW50ZXJuYXRpb25hbCBkaXNoZXMsIGFuZFxuICBldmVyeXRoaW5nIGlzIGNvb2tlZCB3aXRoIGEgdG91Y2ggb2Ygc3BpY2UuIFRoZSBkZXNzZXJ0cyBhcmVcbiAgYWxzbyBoZWF2ZW5seSwgSSBsb3ZlZCB0aGUgaWNlIGNyZWFtIGFuZCB0aGUgc21vb3RoaWVzLiBUaGVcbiAgcmVzdGF1cmFudCBoYXMgYSBmb3ggdGhlbWUsIHdoaWNoIGlzIHZlcnkgY3V0ZSBhbmQgb3JpZ2luYWwuIFRoZVxuICBtdXNpYyBpcyB1cGJlYXQgYW5kIHRoZSBldmVudHMgYXJlIGVudGVydGFpbmluZy4gUGVwcGVyIEZveCBpcyBhXG4gIGdyZWF0IHBsYWNlIHRvIGhhbmcgb3V0IHdpdGggZnJpZW5kcyBhbmQgZmFtaWx5LuKAnWA7XG4gIHNwYW4gPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcInJldmlld2VyXCIpO1xuICBzcGFuLnRleHRDb250ZW50ID0gXCJNYXJ5YW0sIFllbHBcIjtcbiAgYXBwZW5kQ2hpbGRyZW4oY29tbWVudExpc3RbMl0sIFticSwgc3Bhbl0pO1xuICBhcHBlbmRDaGlsZHJlbihsaXN0LCBjb21tZW50TGlzdCk7XG4gIGFwcGVuZENoaWxkcmVuKG1haW5Db21tZW50cywgW2gyLCBsaXN0XSk7XG4gIG1haW5NYWluLmFwcGVuZENoaWxkKG1haW5Db21tZW50cyk7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbk1haW4pO1xuICByZXR1cm4gY29udGVudENvbnRhaW5lcjtcbiAgLy8gcHJpbnQgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBhcHBlbmRDaGlsZHJlbiB9IGZyb20gXCIuL0VsZW1lbnRDcmVhdG9yLmpzXCI7XG5pbXBvcnQgbWVudUxvZ28gZnJvbSBcIi4uL2ltZy9tZW51Mi5wbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWVudVBhZ2UoKSB7XG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBbXCJTdGFydGVyc1wiLCBcIlNpZGUgRGlzaGVzXCIsIFwiTWFpbiBDb3Vyc2VcIiwgXCJEZXNlcnRzXCJdO1xuICBjb25zdCBGb29kcyA9IHtcbiAgICBTdGFydGVyczogW1xuICAgICAgXCJCYWtlZCBDaGlja2VuIFdpbmdzLndlYnBcIixcbiAgICAgIFwiVG9tYXRvIFNvdXAuanBlZ1wiLFxuICAgICAgXCJUZXJpeWFraSBDaGlja2VuLndlYnBcIixcbiAgICAgIFwibWVhdGJhbGxzLmpwZ1wiLFxuICAgICAgXCJNYXNoZWQgUG90YXRvcy5qcGdcIixcbiAgICAgIFwiRnJpZWQgQ2hpY2tlbi53ZWJwXCIsXG4gICAgXSxcbiAgICBcIlNpZGUgRGlzaGVzXCI6IFtcbiAgICAgIFwiQXJhbmNpbmkud2VicFwiLFxuICAgICAgXCJDYWxhbWFyaS5qcGdcIixcbiAgICAgIFwiU2FsYWQuanBlZ1wiLFxuICAgICAgXCJQZXN0byBQYXN0YS53ZWJwXCIsXG4gICAgICBcIkZyaWVzLmpwZ1wiLFxuICAgICAgXCJGaXNoIFN0aWNrcy53ZWJwXCIsXG4gICAgXSxcbiAgICBcIk1haW4gQ291cnNlXCI6IFtcbiAgICAgIFwiQmVlZiBTdGV3LmpwZ1wiLFxuICAgICAgXCJCdXJnZXIuanBnXCIsXG4gICAgICBcIldoaXRlIENoaWNrZW4gQ2hpbGkud2VicFwiLFxuICAgICAgXCJVZG9uIE5vb2RsZXMud2VicFwiLFxuICAgICAgXCJTcGFnaGV0dGkuanBnXCIsXG4gICAgICBcIlJvYXN0ZWQgQ2hpY2tlbi53ZWJwXCIsXG4gICAgICBcIlBvcmsgUmlicy5qcGdcIixcbiAgICAgIFwiUGl6emEuanBnXCIsXG4gICAgICBcIkdyaWxsZWQgRmlzaC5qcGdcIixcbiAgICBdLFxuICAgIERlc2VydHM6IFtcIkljZSBDcmVhbS53ZWJwXCIsIFwiRnJ1aXQgU2FsYWQuanBnXCIsIFwiQ2hvY29sYXRlIENha2UuanBnXCJdLFxuICB9O1xuXG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHVuZGVmaW5lZCwgW1wiaWRcIiwgXCJjb250ZW50XCJdKTtcbiAgY29uc3QgbWVudUhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIiwgXCJtZW51LWhlYWRlclwiKTtcbiAgY29uc3QgbWVudUhlYWRlck5hdiA9IGNyZWF0ZUVsZW1lbnQoXCJuYXZcIiwgXCJtZW51LWhlYWRlci1uYXZcIik7XG4gIGxldCBkaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBtZW51TGlua3MgPSBbXG4gICAgY3JlYXRlRWxlbWVudChcImFcIiwgXCJuby1yaWdodC1ib3JkZXJcIiwgW1wiaHJlZlwiLCBcIiNcIl0pLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJhXCIsIFwiYWN0aXZlXCIsIFtcImhyZWZcIiwgXCIjXCJdKSxcbiAgICBjcmVhdGVFbGVtZW50KFwiYVwiLCB1bmRlZmluZWQsIFtcImhyZWZcIiwgXCIjXCJdKSxcbiAgXTtcbiAgbWVudUxpbmtzWzBdLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gIG1lbnVMaW5rc1sxXS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICBtZW51TGlua3NbMl0udGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgYXBwZW5kQ2hpbGRyZW4oZGl2LCBtZW51TGlua3MpO1xuICBtZW51SGVhZGVyTmF2LmFwcGVuZENoaWxkKGRpdik7XG4gIG1lbnVIZWFkZXIuYXBwZW5kQ2hpbGQobWVudUhlYWRlck5hdik7XG4gIGNvbnN0IG1lbnVIZWFkZXJIZWFkZXIgPSBjcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIsIFwibWVudS1oZWFkZXItaGVhZGVyXCIpO1xuICBjb25zdCBtZW51SGVhZGVyTG9nbyA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgXCJtZW51LWhlYWRlci1sb2dvXCIpO1xuICBtZW51SGVhZGVyTG9nby5zcmMgPSBtZW51TG9nbztcbiAgbWVudUhlYWRlckhlYWRlci5hcHBlbmRDaGlsZChtZW51SGVhZGVyTG9nbyk7XG4gIG1lbnVIZWFkZXIuYXBwZW5kQ2hpbGQobWVudUhlYWRlckhlYWRlcik7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUhlYWRlcik7XG5cbiAgY29uc3QgbWVudU5hdkNhdGVnb3J5TmF2ID0gY3JlYXRlRWxlbWVudChcIm5hdlwiLCBcIm1lbnUtbmF2LWNhdGVnb3J5LW5hdlwiKTtcbiAgY2F0ZWdvcmllcy5mb3JFYWNoKChjYXRlZ29yeSkgPT4ge1xuICAgIGxldCBsaW5rID0gY3JlYXRlRWxlbWVudChcImFcIiwgXCJjYXRlZ29yeS1saW5rXCIsIFtcbiAgICAgIFwiaHJlZlwiLFxuICAgICAgYCMke2NhdGVnb3J5LnNwbGl0KFwiIFwiKS5qb2luKFwiLVwiKX1gLFxuICAgIF0pO1xuICAgIGxpbmsudGV4dENvbnRlbnQgPSBjYXRlZ29yeTtcbiAgICBtZW51TmF2Q2F0ZWdvcnlOYXYuYXBwZW5kQ2hpbGQobGluayk7XG4gIH0pO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVOYXZDYXRlZ29yeU5hdik7XG5cbiAgY29uc3QgbWVudU1haW4gPSBjcmVhdGVFbGVtZW50KFwibWFpblwiLCBcIm1lbnUtbWFpblwiKTtcbiAgY2F0ZWdvcmllcy5mb3JFYWNoKChjYXRlZ29yeSkgPT4ge1xuICAgIGNvbnN0IG1lbnVNYWluQ2F0ZWdvcnkgPSBjcmVhdGVFbGVtZW50KFwic2VjdGlvblwiLCBcIm1lbnUtbWFpbi1jYXRlZ29yeVwiLCBbXG4gICAgICBcImlkXCIsXG4gICAgICBgJHtjYXRlZ29yeS5zcGxpdChcIiBcIikuam9pbihcIi1cIil9YCxcbiAgICBdKTtcbiAgICBjb25zdCBtZW51TWFpbkNhdGVnb3J5VGl0bGUgPSBjcmVhdGVFbGVtZW50KFxuICAgICAgXCJoM1wiLFxuICAgICAgXCJtZW51LW1haW4tY2F0ZWdvcnktdGl0bGVcIlxuICAgICk7XG4gICAgbWVudU1haW5DYXRlZ29yeVRpdGxlLnRleHRDb250ZW50ID0gY2F0ZWdvcnk7XG4gICAgbWVudU1haW5DYXRlZ29yeS5hcHBlbmRDaGlsZChtZW51TWFpbkNhdGVnb3J5VGl0bGUpO1xuICAgIGNvbnN0IG1lbnVNYWluQ2F0ZWdvcnlDb250ZW50ID0gY3JlYXRlRWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBcIm1lbnUtbWFpbi1jYXRlZ29yeS1jb250ZW50XCJcbiAgICApO1xuXG4gICAgRm9vZHNbY2F0ZWdvcnldLmZvckVhY2goKGZvb2RJbWcpID0+IHtcbiAgICAgIGNvbnN0IGZvb2ROYW1lID0gZm9vZEltZy5zcGxpdChcIi5cIilbMF07XG4gICAgICBjb25zdCBmb29kQ2FyZCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmb29kLWNhcmRcIik7XG4gICAgICBjb25zdCBmaWd1cmUgPSBjcmVhdGVFbGVtZW50KFwiZmlndXJlXCIpO1xuICAgICAgY29uc3QgaW1nID0gY3JlYXRlRWxlbWVudChcImltZ1wiLCBcImZvb2QtY2FyZC1pbWdcIiwgW1wiYWx0XCIsIGZvb2ROYW1lXSk7XG4gICAgICBpbWcuc3JjID0gYC4uL3NyYy9pbWcvZm9vZHMvJHtmb29kSW1nfWA7XG4gICAgICBjb25zdCBmaWdDYXB0aW9uID0gY3JlYXRlRWxlbWVudChcImZpZ2NhcHRpb25cIiwgXCJmb29kLWNhcmQtdGl0bGVcIik7XG4gICAgICBmaWdDYXB0aW9uLnRleHRDb250ZW50ID0gZm9vZE5hbWU7XG4gICAgICBhcHBlbmRDaGlsZHJlbihmaWd1cmUsIFtpbWcsIGZpZ0NhcHRpb25dKTtcbiAgICAgIGZvb2RDYXJkLmFwcGVuZENoaWxkKGZpZ3VyZSk7XG4gICAgICBtZW51TWFpbkNhdGVnb3J5Q29udGVudC5hcHBlbmRDaGlsZChmb29kQ2FyZCk7XG4gICAgfSk7XG4gICAgbWVudU1haW5DYXRlZ29yeS5hcHBlbmRDaGlsZChtZW51TWFpbkNhdGVnb3J5Q29udGVudCk7XG4gICAgbWVudU1haW4uYXBwZW5kQ2hpbGQobWVudU1haW5DYXRlZ29yeSk7XG4gIH0pO1xuXG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudU1haW4pO1xuXG4gIHJldHVybiBjb250ZW50Q29udGFpbmVyO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBjcmVhdGVDb250YWN0UGFnZSBmcm9tIFwiLi9zY3JpcHRzL2xvYWRlckNvbnRhY3QuanNcIjtcbmltcG9ydCBjcmVhdGVNYWluUGFnZSBmcm9tIFwiLi9zY3JpcHRzL2xvYWRlck1haW4uanNcIjtcbmltcG9ydCBjcmVhdGVNZW51UGFnZSBmcm9tIFwiLi9zY3JpcHRzL2xvYWRlck1lbnUuanNcIjtcblxuZnVuY3Rpb24gbG9hZE1haW5QYWdlKCkge1xuICBjb25zdCBvbGRDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBjb25zdCBuZXdDb250ZW50ID0gY3JlYXRlTWFpblBhZ2UoKTtcbiAgb2xkQ29udGVudC5yZW1vdmUoKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQobmV3Q29udGVudCk7XG4gIGFkZEV2ZW50TGlzdGVuZXJzKCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRNZW51UGFnZSgpIHtcbiAgY29uc3Qgb2xkQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgY29uc3QgbmV3Q29udGVudCA9IGNyZWF0ZU1lbnVQYWdlKCk7XG4gIG9sZENvbnRlbnQucmVtb3ZlKCk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKG5ld0NvbnRlbnQpO1xuICBhZGRFdmVudExpc3RlbmVycygpO1xufVxuXG5mdW5jdGlvbiBsb2FkQ29udGFjdFBhZ2UoKSB7XG4gIGNvbnN0IG9sZENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gIGNvbnN0IG5ld0NvbnRlbnQgPSBjcmVhdGVDb250YWN0UGFnZSgpO1xuICBvbGRDb250ZW50LnJlbW92ZSgpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZChuZXdDb250ZW50KTtcbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gIGNvbnN0IG1lbnVMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ25hdltjbGFzcyQ9XCJoZWFkZXItbmF2XCJdIGEnKTtcbiAgbWVudUxpbmtzWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKCFtZW51TGlua3NbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICBsb2FkTWFpblBhZ2UoKTtcbiAgICB9XG4gIH0pO1xuICBtZW51TGlua3NbMV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoIW1lbnVMaW5rc1sxXS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgIGxvYWRNZW51UGFnZSgpO1xuICAgIH1cbiAgfSk7XG4gIG1lbnVMaW5rc1syXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmICghbWVudUxpbmtzWzJdLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgbG9hZENvbnRhY3RQYWdlKCk7XG4gICAgfVxuICB9KTtcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbiAgbG9hZE1haW5QYWdlKCk7XG4gIGFkZEV2ZW50TGlzdGVuZXJzKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==