// Возвращает элемент из переданного кода шаблона
const getElementFromTemplate = (template) => {
  let div = document.createElement(`div`);
  div.innerHTML = template;
  const element = div.firstChild;

  return element;
};

export default getElementFromTemplate;
