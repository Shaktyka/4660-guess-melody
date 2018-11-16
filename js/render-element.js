const getElementFromTemplate = (template) => {
  let element = template.content;
  element = element.cloneNode(true);
  return element;
};

  // const element = document.createElement('div');
  // element.innerHtml = htmlString;
  // return element;
//console.log(getElementFromTemplate(confirmTemplate));
