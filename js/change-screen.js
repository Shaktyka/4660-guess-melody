import {changeLevel} from './game.js';
import {renderScreen} from './utils.js';
import getGameScreen from './templates/game-screen.js';
import successScreen from './templates/success-screen.js';
import failTriesScreen from './templates/fail-tries-screen.js';
// import resultScreen from './templates/result-screen.js';

// Порядок смены экранов
const changeScreen = (state) => {

  // Если ещё есть жизни, то рендерим следующий экран, иначе переходим к определению результатов
  if (state.lives) {
    if (state.level < 9) {
      const newScreen = changeLevel(state, state.level + 1);
      renderScreen(getGameScreen(newScreen));
    } else {
      renderScreen(successScreen(state));
    }
  } else {
    renderScreen(failTriesScreen(state));
  }

};

export default changeScreen;
