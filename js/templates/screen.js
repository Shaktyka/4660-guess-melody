import {changeLevel} from '../game.js';
import {renderScreen} from '../utils.js';

import {INITIAL_STATE, LEVELS} from '../data';
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
  const screen = new WelcomeView(INITIAL_STATE);

  screen.onStartButton = (state) => {
    renderScreen(gameScreen(state).element);
    // console.log('Нажата кнопка начать');
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
    renderScreen(welcomeScreen(INITIAL_STATE).element);
  };
  return element;
};

// Экран выбора жанра
export const genreScreen = (state) => {
  const screen = new GenreView(state);

  screen.onGenreForm = () => {
    //
  };

  screen.onAnswer = (userAnswers) => {
    // if (rightAnswer === userAnswers.join(`,`)) {
    //   state.answers.push({answer: true, time: 30});
    //   changeScreen(state);
    // } else {
    //   state.answers.push({answer: false, time: 30});
    //   changeScreen(changeLives(state, state.lives - 1));
    // }
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
  const currentLevel = LEVELS[state.level];

  // Контент экрана в зависимости от типа игры
  const content = (currentLevel.type === `game--artist`) ? artistScreen(state).element : genreScreen(state).element;

  screen.element.insertAdjacentElement(`afterbegin`, gameHeader(state).element);
  screen.element.querySelector(`.game__screen`).appendChild(content);

  return screen;
};

// Экран результатов игры
export const resultScreen = (state) => {
  const screen = new ResultView(state);

  screen.onReplayButton = () => {
    changeScreen(welcomeScreen(INITIAL_STATE).element);
  };

  return screen;
};
