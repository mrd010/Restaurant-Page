export function createLink(linkClass = null, href = "#", textContent) {
  const link = document.createElement("a");
  if (linkClass) {
    link.classList.add(linkClass);
  }
  link.setAttribute("href", href);
  link.textContent = textContent;

  return link;
}

export function createElement(elementTag, elementClass = null) {
  const element = document.createElement(elementTag);
  if (elementClass) {
    element.classList.add(elementClass);
  }

  return element;
}
