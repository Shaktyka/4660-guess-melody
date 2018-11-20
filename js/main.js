import welcomeScreen from './welcome-screen.js';

import {renderScreenContent} from './utils.js';

// После загрузки документа
document.addEventListener(`DOMContentLoaded`, () => {
  // Отрисовываем экран приветствия
  renderScreenContent(welcomeScreen);
});
