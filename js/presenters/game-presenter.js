import GameView from '../views/game-view.js';
// import headerPresenter from '../presenters/header-presenter.js';
// import {LEVELS} from '../levels';
// Текущий уровень
// const currentLevel = LEVELS[state.level];

export default class GamePresenter {
  constructor() {
    this.onStartButton();
  }


}

const gameScreen = (state) => {
  const screen = new GameView(state);

  // Контент экрана в зависимости от типа игры

  // screen.element.insertAdjacentElement(`afterbegin`, header(state).element);
  // screen.element.querySelector(`.game__screen`).appendChild(content);

  return screen;
};
