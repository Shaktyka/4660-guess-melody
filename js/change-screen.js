import {changeLevel} from './game.js';
import {renderPresenter} from './utils.js';
import resultPresenter from './presenters/result-presenter.js';
import failTriesPresenter from './presenters/fail-tries-presenter.js';
import gamePresenter from './presenters/game-presenter.js';

const LIVE_ADD = 1;

// Смена экранов
const changeScreen = (state) => {
  if (state.lives) {
    if (state.level < 9) {
      const newScreen = changeLevel(state, state.level + LIVE_ADD);
      renderPresenter(gamePresenter(newScreen).element);
    } else {
      renderPresenter(resultPresenter(state).element);
    }
  } else {
    renderPresenter(failTriesPresenter(state).element);
  }

};

export default changeScreen;
