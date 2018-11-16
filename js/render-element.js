const getElementFromTemplate = (template) => {
  let element = template.content;
  element = element.cloneNode(true);
  return element;
};
