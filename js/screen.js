import {INITIAL_STATE, LEVELS} from './data';
import {changeLevel, changeLives} from './game.js';
import {renderScreen} from './utils.js';

import WelcomeView from './views/welcome-view.js';
import HeaderView from './views/header-view.js';
import GameView from './views/game-view.js';
import GenreView from './views/genre-view.js';
import ArtistView from './views/artist-view.js';
import FailTriesView from './views/fail-tries-view.js';
import FailTimeView from './fail-time-view.js';
import ResultView from './views/result-view.js';

// Инкремент кол-ва жизней
const LIVE_ADD = 1;

// Смена экранов
export const changeScreen = (state) => {
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
