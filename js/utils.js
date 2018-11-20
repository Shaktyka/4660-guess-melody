import welcomeScreen from './welcome-screen.js';

// Секция, куда рендерятся экраны
const mainSection = document.querySelector(`.main`);

// Возвращает элемент из переданного кода шаблона
export const getElementFromTemplate = (template) => {
  const div = document.createElement(`div`);
  div.innerHTML = template;
  const element = div.firstChild;

  return element;
};

// Отрисовка экрана по переданному элементу
export const renderScreenContent = (element) => {
  mainSection.innerHTML = ``;
  mainSection.appendChild(element);
};

// Возврат к приветственному экрану
export const backButtonClickHandler = (evt) => {
  evt.preventDefault();
  renderScreenContent(welcomeScreen);
};

// Генерация рандомного числа: 0 или 1
export const getRandom = () => {
  return Math.floor(Math.random() * 2);
};
