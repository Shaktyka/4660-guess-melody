import {INITIAL_STATE, LEVELS} from './data';
import {changeLevel, changeLives} from './game.js';
import {renderScreen} from './utils.js';

import WelcomeView from './views/welcome-view.js';
import HeaderView from './views/header-view.js';
import GameView from './views/game-view.js';
import GenreView from './views/genre-view.js';
import ArtistView from './views/artist-view.js';
import FailTriesView from './views/fail-tries-view.js';
// import FailTimeView from './fail-time-view.js';
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
  const element = new HeaderView(state);

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

  screen.onAnswer = (rightAnswer, userAnswers) => {
    if (rightAnswer === userAnswers.join(`,`)) {
      state.answers.push({answer: true, time: 30});
      changeScreen(state);
    } else {
      state.answers.push({answer: false, time: 30});
      changeScreen(changeLives(state, state.lives - 1));
    }
  };
  return screen;
};

// Экран выбора артиста
export const artistScreen = (state) => {
  const screen = new ArtistView(state);

  screen.onAnswer = (item, answer) => {
    if (item.querySelector(`img`).src === answer) {
      state.answers.push({answer: true, time: 30});
      changeScreen(state);
    } else {
      state.answers.push({answer: false, time: 30});
      changeScreen(changeLives(state, state.lives - 1));
    }
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
    renderScreen(welcomeScreen(INITIAL_STATE).element);
  };

  return screen;
};

// Экран поражения при 0 попыток
export const failTriesScreen = (state) => {
  const screen = new FailTriesView(state);

  screen.onReplayButton = () => {
    renderScreen(welcomeScreen(INITIAL_STATE).element);
  };

  return screen;
};
