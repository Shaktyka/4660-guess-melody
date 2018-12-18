import {changeLevel} from './game.js';
import {renderPresenter} from './utils.js';
import FailTriesPresenter from './presenters/fail-tries-presenter.js';
import GamePresenter from './presenters/game-presenter.js';
import ResultPresenter from './presenters/result-presenter.js';
// import countPoints from './game-points.js';
// import gameResults from '/game-results.js';
// import {INITIAL_STATE} from './data';

// Инкремент кол-ва жизней
const LIVE_ADD = 1;

// let game;
// let timer;
const ONE_SECOND = 1000;

// const updateHeader = (state) => {
// updateView(headerElement, new HeaderView(state));
// };

// Смена экранов
const changeScreen = (state) => {
  if (state.lives) {
    if (state.level < 9) {
      const newScreen = changeLevel(state, state.level + LIVE_ADD);
      renderPresenter(GamePresenter(newScreen).element);
    } else {
      renderPresenter(ResultPresenter(state).element);
    }
  } else {
    renderPresenter(FailTriesPresenter(state).element);
  }

};

export default class GameScreen {
  // Инициал-ция и настройка игры
  constructor(model) {
  	this.model = model;
    this._view = new GameView(this.model.state);
    this.element = this._view.element;
  }

  start() {
    //  updateGame(game);
    //  changeScreen(gameContainerElement);
    this.startTimer();
  }

  // Запускать/останавливать отсчёт времени в игре и обновлять модель и представление соответствующим образом
  tick() {
    this.model.tick();
    // game = Object.assign({}, game, {
    //   time: game.time - 1
    // });
    // updateHeader(game);
  }

  // Запуск таймера
  startTimer() {
    this.timer = setTimeout(() => {
    this.tick();
    startTimer();
    }, ONE_SECOND);
  }

  // Остановка таймера
  stopTimer() {
    clearTimeout(this.timer);
  }

  // Обновление статистики игры
  updateHeader() {}

  changeLevel() {}

  // Обработка ответов польз-лей

  // Должен реагировать на действия, происходящие в представлении (выбор ответа игроком), 
  // обрабатывать его и обновлять модель и представление в соответствии с ответом
}
