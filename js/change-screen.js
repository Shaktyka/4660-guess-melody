import {changeLevel} from './game.js';
import {renderPresenter} from './utils.js';
import resultPresenter from './presenters/result-presenter.js';
import failTriesPresenter from './presenters/fail-tries-presenter.js';
import gameScreen from './presenters/game-presenter.js';

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
