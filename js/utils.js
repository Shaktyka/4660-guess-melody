import welcomeScreen from './welcome-screen.js';

// Секция, куда рендерятся экраны
const mainSection = document.querySelector(`.main`);

// Возвращает элемент из переданного кода шаблона
export const renderElement = (template) => {
  const div = document.createElement(`div`);
  div.innerHTML = template;
  const element = div.firstChild;

  return element;
};

// Отрисовка экрана по переданному элементу
export const renderScreen = (element) => {
  mainSection.innerHTML = ``;
  mainSection.appendChild(element);
};

// Возврат к приветственному экрану
export const backButtonClickHandler = (evt) => {
  evt.preventDefault();
  renderScreen(welcomeScreen);
};

// Генерация рандомного числа: 0 или 1
export const getRandom = () => {
  return Math.floor(Math.random() * 2);
};

// Добавление 0 перед кол-вом минут (1 символ)
export const addZero = (number) => {
  const zero = number.toString().length < 2 ? `0${number}` : number;
  return zero;
};
