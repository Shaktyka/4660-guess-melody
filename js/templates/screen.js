import {changeLevel} from '../game.js';
import {renderScreen} from '../utils.js';

import {initialState, levels} from '../data';
import WelcomeView from './welcome-view.js';
import GameHeader from './game-header.js';
import GameView from './game-view.js';
import GenreView from './genre-view.js';
import ArtistView from './artist-view.js';
// import FailTriesView from './fail-tries-view.js';
// import FailTimeView from './fail-time-view.js';
import ResultView from './result-view.js';

// Инкремент кол-ва жизней
const LIVE_ADD = 1;

// Смена экранов
export const changeScreen = (state) => {

  if (state.lives) {
    if (state.level < 9) {
      const newScreen = changeLevel(state, state.level + LIVE_ADD);
      // console.log('Попытка сменить экран');
      renderScreen(gameScreen(newScreen).element);
    } else {
      renderScreen(resultScreen(state).element);
    }
  } else {
    // renderScreen(failTriesScreen(state).element);
  }

};

// Приветственный экран
export const welcomeScreen = () => {
  const screen = new WelcomeView(initialState);

  screen.onStartButton = (state) => {
    renderScreen(gameScreen(state).element);
    //console.log('Нажата кнопка начать');
  };
  return screen;
};

// Хедер
export const gameHeader = (state) => {
  const element = new GameHeader(state);

  element.onStartButton = () => {
    // Обнуляем массив ответов (здесь?)
    if (state.answers.length > 0) {
      state.answers.length = 0;
    }
    renderScreen(welcomeScreen(initialState).element);
  };
  return element;
};

// Экран выбора жанра
export const genreScreen = (state) => {
  const screen = new GenreView(state);

  // где делать навешивание обработчиков?

  screen.onAnswer = () => {
    // переход к следующему экрану
  };
  return screen;
};

// Экран выбора артиста
export const artistScreen = (state) => {
  const screen = new ArtistView(state);

  screen.onAnswer = () => {
    // переход к следующему экрану
  };
  return screen;
};

// Экран игры
export const gameScreen = (state) => {
  const screen = new GameView(state);

  // Текущий уровень
  const currentLevel = levels[state.level];

  // Контент экрана в зависимости от типа игры
  const content = (currentLevel.type === `game--artist`) ? artistScreen(state).element : genreScreen(state).element;

  screen.element.insertAdjacentElement(`afterbegin`, gameHeader(state).element );
  screen.element.querySelector(`.game__screen`).appendChild(content);

  return screen;
};

// Экран результатов игры
export const resultScreen = (state) => {
  const screen = new ResultView(state);

  screen.onReplayButton = () => {
    changeScreen(welcomeScreen(initialState).element);
  };

  return screen;
};
