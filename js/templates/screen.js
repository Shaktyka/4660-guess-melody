// будет экспортировать функцию
// функция будет создавать экземпляр класса ButtonView и переопределять метод onClick так, чтобы при каждом вызове onClick показывалось диалоговое окно, которое в свою очередь ждёт результата действий от пользователя
import {changeLevel} from '../game.js';
import {renderScreen} from '../utils.js';
import getGameScreen from './game-screen.js';

import {initialState} from '../data';
import WelcomeView from './welcome-view.js';
import GameHeader from './game-header.js';
// import GameView from './game-view.js';
// import GenreView from './genre-view.js';
// import ArtistView from './artist-view.js';
// import FailTriesView from './fail-tries-view.js';
// import FailTimeView from './fail-time-view.js';
// import ResultView from './result-view.js';

// Инкремент кол-ва жизней
const LIVE_ADD = 1;

// Смена экранов
export const changeScreen = (state) => {

  // Если ещё есть жизни, то рендерим следующий экран, иначе переходим к определению результатов
  if (state.lives) {
    // if (state.level < 9) {
    const newScreen = changeLevel(state, state.level + LIVE_ADD);
    renderScreen(getGameScreen(newScreen).element);
    // } else {
    // renderScreen(resultScreen(state).element);
    // }
  // } else {
    // renderScreen(failTriesScreen(state).element);
  }

};

// Приветственный экран
export const welcomeScreen = () => {
  const screen = new WelcomeView(initialState);

  screen.onStartButton = (state) => {
    renderScreen(getGameScreen(state).element);
  };

  return screen;
};

// Хедер
export const gameHeader = (state) => {
  const element = new GameHeader(state);

  element.onStartButton = () => {
    // Обнуляем массив ответов
    if (state.answers.length > 0) {
      state.answers.length = 0;
    }
    renderScreen(welcomeScreen(initialState).element);
  };
  return element;
};

// Пример:
// export default () => {
// const myButton = new ButtonView(`Заманчивое предложение`);
// const myDialog = new DialogView(`Привет!`, `Придёшь к нам ещё?`);

// myDialog.onConfirm = () => console.log(`Ура, пользователь согласился!`);
// myDialog.onCancel = () => console.log(`Ой-ой, пользователь отказался =(`);

// myButton.onClick = () => show(myDialog);

// show(myButton);
// };
