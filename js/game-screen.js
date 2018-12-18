import {changeLevel} from './game.js';
import {renderPresenter, ONE_SECOND} from './utils.js';
import FailTriesPresenter from './presenters/fail-tries-presenter.js';
import GameScreenView from './views/game-screen-view.js';
import HeaderView from './views/header-view.js';
import GenreView from './views/genre-view.js';
import ArtistView from './views/artist-view.js';
import Application from './application';
import ResultPresenter from './presenters/result-presenter.js';
// import GameScreenPresenter from './presenters/game-screen-presenter.js';
// import countPoints from './game-points.js';
// import gameResults from '/game-results.js';
// import {INITIAL_STATE} from './data';

// const updateHeader = (state) => {
//   updateView(headerElement, new HeaderView(state));
// };

// Смена экранов
// const changeScreen = (state) => {
//   if (state.lives) {
//     if (state.level < 9) {
//       const newScreen = changeLevel(state, state.level + LIVE_ADD);
//       renderPresenter(GamePresenter(newScreen).element);
//     } else {
//       renderPresenter(ResultPresenter(state).element);
//     }
//   } else {
//     renderPresenter(FailTriesPresenter(state).element);
//   }

// };

export default class GameScreen {
  // Инициал-ция и настройка игры
  constructor(model) {
  	this.model = model;
    this._view = new GameScreenView(this.model.state);

    this.header = new HeaderView(this.model.state);
    this.content = (this.model.isGameGenre()) ? new GenreView(this.model.state) : new AtistView(this.model.state);

    this.element.insertAdjacentElement(`afterbegin`, this.header.element);
    this.element.querySelector(`.game__screen`).appendChild(this.content.element);

    this._timer = null;
  }

  get element() {
    return this._view.element;
  }

  // Запускать/останавливать отсчёт времени в игре и обновлять модель и представление соответствующим образом
  _tick() {
    this.model.tick();
    this._timer = setTimeout(() => this._tick(), ONE_SECOND);
    this.updateHeader();
  }

  // Найти по этим методам реализацию
  _initGame() {
    // this.content.playAudio();
    // this.content.initSetting();
    // this.content.onAnswer = () => (this.model.isGameGenre()) ? this.answerGenre() : this.answerArtist();
  }

  start() {
    // Какие ещё действия?
    // this._tick; // Запуск таймера
    this.model.restart();
    this._initGame();
    this.updateHeader(); 
  }

  // Обновление статистики игры
  updateHeader() {
    const header = new HeaderView(this.model.state);
    this.element.replaceChild(header.element, this.header.element);
    this.header = header;
    this.header.onStartButton = () => {
      Application.showWelcome();
      this.stopTimer();
    };
    this.timeOut();
    //console.log('upd header');
  }

  updateContent() {
    const content = (this.model.isGameGenre()) ? new GameView(this.model.state) : new AtistView(this.model.state);
    this.element.querySelector(`.game__screen`).replaceChild(content.element, this.content.element);
    this.content = content;
    this._initGame();
  }

  goToNextLevel() {
    this.model.nextLevel();
    if (this.model.getRigthForNextLevel()) {
      this.updateContent();
    } else {
      Application.showResult(this.model.state);
      this.stopTimer();
    }
  }

  // Запуск таймера
  startTimer() {
    this.timer = setTimeout(() => this._tick(), startTimer(), ONE_SECOND);
  }

  // stopGame() {
  //   clearInterval(this._timer);
  // }
  // Остановка таймера
  stopTimer() {
    clearTimeout(this._timer);
  }

  timeOut() {
    if (this.model.state.time === 0) {
      Application.showResult(this.model.state);
      this.stopTimer();
    }
  }

  changeLevel() {}

  // Обработка ответов польз-лей

  // Должен реагировать на действия, происходящие в представлении (выбор ответа игроком), 
  // обрабатывать его и обновлять модель и представление в соответствии с ответом
}
