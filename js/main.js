import welcomeScreen from './welcome-screen.js';

import {renderScreen} from './utils.js';

// После загрузки документа
document.addEventListener(`DOMContentLoaded`, () => {
  // Отрисовываем экран приветствия
  renderScreen(welcomeScreen);
});
