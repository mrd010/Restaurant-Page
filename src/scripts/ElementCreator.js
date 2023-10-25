export function appendChildren(element, children) {
  children.forEach((child) => element.appendChild(child));
}

export function createElement(elementTag, elementClass, ...attributes) {
  const element = document.createElement(elementTag);
  if (elementClass) {
    element.classList.add(elementClass);
  }

  attributes.forEach((attribute) => {
    element.setAttribute(attribute[0], attribute[1]);
  });

  return element;
}
