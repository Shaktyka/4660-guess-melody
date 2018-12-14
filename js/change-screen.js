import {changeLevel} from './game.js';
import {renderScreen} from './utils.js';
import resultScreen from './screens/result-screen.js';
import failTriesScreen from './screens/fail-tries-screen.js';
import gameScreen from './screens/game-screen.js';

// Инкремент кол-ва жизней
const LIVE_ADD = 1;

// Смена экранов
const changeScreen = (state) => {
  if (state.lives) {
    if (state.level < 9) {
      const newScreen = changeLevel(state, state.level + LIVE_ADD);
      renderScreen(gameScreen(newScreen).element);
    } else {
      renderScreen(resultScreen(state).element);
    }
  } else {
    renderScreen(failTriesScreen(state).element);
  }

};

export default changeScreen;
