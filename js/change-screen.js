import {changeLevel} from './game.js';
import {renderScreen} from './utils.js';
import getGameScreen from './game-screen.js';
import successScreen from './success-screen.js';

// Порядок смены экранов
const changeScreen = (state) => {

  // Если ещё есть жизни, то рендерим следующий экран, иначе показываем экран результата (пока экран успеха)
  if (state.lives) {
    if (state.level < 9) {
      const newScreen = changeLevel(state, state.level + 1);
      renderScreen(getGameScreen(newScreen));
    }
  } else {
    renderScreen(successScreen(state));
  }

};

export default changeScreen;
