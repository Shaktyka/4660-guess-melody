import {welcomeScreen} from './screens/welcome-screen.js';
import {renderScreen} from './utils.js'; // добавляет элемент внутрь main.js
import {INITIAL_STATE} from './data';

// Application.showWelcome();

// После загрузки документа
document.addEventListener(`DOMContentLoaded`, () => {
  // Отрисовываем экран приветствия
  renderScreen(welcomeScreen(INITIAL_STATE).element);
});
