// Блок для вывода содержимого экрана
const mainSection = document.querySelector(`.main`);

import welcomeScreen from './welcome-screen.js';

import renderScreenContent from './render-screen.js';

// После загрузки документа
document.addEventListener(`DOMContentLoaded`, () => {
  // Отрисовываем экран приветствия
  renderScreenContent(welcomeScreen);
});
