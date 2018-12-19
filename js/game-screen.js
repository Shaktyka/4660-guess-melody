import {ONE_SECOND, renderPresenter} from './utils.js';
import Application from './application';

import GameScreenView from './views/game-screen-view.js';
import HeaderView from './views/header-view.js';
import GenreView from './views/genre-view.js';
import ArtistView from './views/artist-view.js';

// import FailTriesPresenter from './presenters/fail-tries-presenter.js';
// import {changeLevel} from './game.js';
// import ResultPresenter from './presenters/result-presenter.js';
// import countPoints from './game-points.js';
// import gameResults from '/game-results.js';

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
  constructor(model) {
    this.model = model;
    this._view = new GameScreenView(this.model.state);

    this.gameHeader = new HeaderView(this.model.state);
    this.gameContent = (this.model.isGameGenre()) ? new GenreView(this.model.state) : new ArtistView(this.model.state);

    this.element.insertAdjacentElement(`afterbegin`, this.gameHeader.element);
    this.element.querySelector(`.game__screen`).appendChild(this.gameContent.element);

    this._timer = null;
    this._bonusTime = null;
    this.bind();
    this.restart();
  }

  get element() {
    return this._view.element;
  }

  start() {
    this._tick();
  }

  stopGame() {
    clearInterval(this._timer);
  }

  endGame() {
    Application.showResult(this.model.result);
  }

  changeLevel() {
    if (this.model.state.level < this.model.state.levels) {
      const gameScreen = new GameScreen(this.model);
      gameScreen.start();
      renderPresenter(gameScreen.element);
    } else {
      this.endGame();
    }
  }

  updateHeader() {
    const header = new HeaderView(this.model.state);
    this._view.element.replaceChild(header.element, this.gameHeader.element);
    this.gameHeader = header;
    this.restart();
  }

  _tick() {
    if (this.model.isTime()) {
      this.model.tick();
      this._bonusTime++;
      this.updateHeader();
      this._timer = setTimeout(() => this._tick(), ONE_SECOND);
    } else {
      this.timeOut();
    }
  }

  getAnswerArtist(element) {
    return element.querySelector(`.artist__input`).value.split(`-`)[1];
  }

  getAnswersGenre() {
    const answers = Array.from(this._view.element.querySelectorAll(`input:checked`));
    const listAnswers = [];
    answers.forEach((item) => {
      listAnswers.push(item.value.split(`-`)[1]);
    });
    return listAnswers.join(`,`);
  }

  answer(element) {
    const answer = (this.model.isGameArtist()) ? this.getAnswerArtist(element) : this.getAnswersGenre();
    const isCorrect = answer === this.model.correctAnswer();

    this.stopGame();
    this.model.answer(isCorrect, this._bonusTime);
    this.model.die(!isCorrect);

    if (!this.model.isDead()) {
      this.model.nextLevel();
      this.changeLevel();
    } else {
      this.endGame();
    }
  }

  restart() {
    this.gameHeader.onStartButton = () => {
      this.stopGame();
      Application.showWelcome();
    }
  }

  bind() {
    this.gameContent.onAnswer = (element) => {
      this.model.nextLevel();
      this.answer(element); // здесь элемент - ссылка аудио, выбранного игроков
    }
  }

  timeOut() {
    if (this.model.state.time === 0) {
      Application.showResult(this.model.state);
      this.stopTimer();
    }
  }

  // Остановка таймера
  stopTimer() {
    clearTimeout(this._timer);
  }

  timeOut() {
    this.stopGame();
    this.endGame();
  }
}
