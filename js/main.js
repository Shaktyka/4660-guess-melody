import {welcomeScreen} from './templates/screen.js';
import {renderScreen} from './utils.js';
import {initialState} from './data';

// После загрузки документа
document.addEventListener(`DOMContentLoaded`, () => {
  // Отрисовываем экран приветствия
  renderScreen(welcomeScreen(initialState).element);
});
