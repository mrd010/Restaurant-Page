import { createElement, appendChildren } from "./ElementCreator.js";

export default function createContactPage() {
  const contentContainer = createElement("div", undefined, ["id", "content"]);
  const contactHeader = createElement("header", "contact-header");
  const contactHeaderNav = createElement("nav", "contact-header-nav");
  let div = createElement("div");
  const menuLinks = [
    createElement("a", undefined, ["href", "#"]),
    createElement("a", "no-right-border", ["href", "#"]),
    createElement("a", "active", ["href", "#"]),
  ];
  menuLinks[0].textContent = "Home";
  menuLinks[1].textContent = "Menu";
  menuLinks[2].textContent = "Contact";
  appendChildren(div, menuLinks);
  contactHeaderNav.appendChild(div);
  contactHeader.appendChild(contactHeaderNav);
  contentContainer.appendChild(contactHeader);

  const contactMain = createElement("main", "contact-main");
  const contactForm = createElement("form", "contact-form", ["action", ""]);
  const contactFormHeader = createElement("h1", "contact-form-header");
  contactFormHeader.textContent = "Contact Us";
  contactForm.appendChild(contactFormHeader);
  // name input
  let inputField = createElement("div", "input-field");
  let label = createElement("label", undefined, ["for", "name"]);
  label.textContent = "Name";
  let input = createElement(
    "input",
    undefined,
    ["type", "text"],
    ["id", "name"],
    ["name", "name"],
    ["placeholder", "Example: John Doe"],
    ["required", true]
  );
  appendChildren(inputField, [label, input]);
  contactForm.appendChild(inputField);
  // mail input
  inputField = createElement("div", "input-field");
  label = createElement("label", undefined, ["for", "email"]);
  label.textContent = "E-mail";
  input = createElement(
    "input",
    undefined,
    ["type", "email"],
    ["id", "email"],
    ["name", "email"],
    ["placeholder", "Example: example@gmail.com"],
    ["required", true]
  );
  appendChildren(inputField, [label, input]);
  contactForm.appendChild(inputField);
  // message
  inputField = createElement("div", "input-field");
  label = createElement("label", undefined, ["for", "message"]);
  label.textContent = "Message";
  input = createElement(
    "textarea",
    undefined,
    ["id", "message"],
    ["name", "message"],
    ["placeholder", "Write your message here..."],
    ["required", true]
  );
  appendChildren(inputField, [label, input]);
  contactForm.appendChild(inputField);
  //   submit button
  inputField = createElement("div", "input-field");
  let submitBtn = createElement("button", undefined, ["type", "submit"]);
  submitBtn.textContent = "Send Message";
  inputField.appendChild(submitBtn);
  contactForm.appendChild(inputField);

  contactMain.appendChild(contactForm);
  contentContainer.appendChild(contactMain);

  return contentContainer;
}
