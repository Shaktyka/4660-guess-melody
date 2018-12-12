import {welcomeScreen} from './screen.js';
import {renderScreen} from './utils.js';
import {INITIAL_STATE} from './data';

// После загрузки документа
document.addEventListener(`DOMContentLoaded`, () => {
  // Отрисовываем экран приветствия
  renderScreen(welcomeScreen(INITIAL_STATE).element);
});
