import GameView from '../views/game-view.js';
import headerPresenter from '../presenters/header-presenter.js';
import genreScreen from '../presenters/genre-presenter.js';
import artistScreen from '../presenters/artist-presenter.js';
import {LEVELS} from '../levels';

const gameScreen = (state) => {
  const screen = new GameView(state);

  // Текущий уровень
  const currentLevel = LEVELS[state.level];

  // Контент экрана в зависимости от типа игры
  const content = (currentLevel.type === `game--artist`) ? artistScreen(state).element : genreScreen(state).element;

  screen.element.insertAdjacentElement(`afterbegin`, header(state).element);
  screen.element.querySelector(`.game__screen`).appendChild(content);

  return screen;
};

export default gameScreen;
