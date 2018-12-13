import GameView from '../views/game-view.js';
import {renderElement} from '../utils.js';
import header from '../screens/header.js';
import genreScreen from '../screens/genre-screen.js';
import artistScreen from '../screens/artist-screen.js';
import {LEVELS} from '../data';

const gameScreen = (state) => {
  const screen = new GameView(state);

  // Текущий уровень
  const currentLevel = LEVELS[state.level];

  // Контент экрана в зависимости от типа игры
  const content = (currentLevel.type === `game--artist`) ? artistScreen(state).element : genreScreen(state).element;

  screen.element.insertAdjacentElement(`afterbegin`, gameHeader(state).element);
  screen.element.querySelector(`.game__screen`).appendChild(content);

  return screen;
};

export default gameScreen;
