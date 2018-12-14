// Секция, куда рендерятся экраны
const mainSection = document.querySelector(`.main`);

// Отрисовка экрана по переданному элементу
export const renderScreen = (element) => {
  mainSection.innerHTML = ``;
  mainSection.appendChild(element);
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
