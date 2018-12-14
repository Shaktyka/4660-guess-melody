import AbstractView from './abstract-view.js';
// import {LEVELS} from '../data';
import {INITIAL_STATE} from '../data';
import {gameResults, countStatistics} from '../game-results.js';
import countPoints from '../game-points.js';
import inclineNouns from '../incline-nouns.js';

const statistics = [4, 5, 8, 10, 11];

export default class ResultView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
    this.state.points = countPoints(state.answers, state.lives);
    this.state.errors = INITIAL_STATE.lives - state.lives;
    this.state.result = gameResults(statistics, state);
    this.gameResult = countStatistics(state);
  }

  get template() {
    return `<section class="result">
  <div class="result__logo">
    <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83">
  </div>
  <h2 class="result__title">Вы настоящий меломан!</h2>
  <p class="result__total">За ${this.gameResult.minutes} ${inclineNouns(this.gameResult.minutes, [`минута`, `минуты`, `минут`])} и ${this.gameResult.seconds} ${inclineNouns(this.gameResult.seconds, [`секунда`, `секунды`, `секунд`])} вы набрали ${this.gameResult.points} баллов (8 быстрых), совершив ${this.gameResult.errors} ${inclineNouns(this.gameResult.errors, [`ошибка`, `ошибки`, `ошибок`])}</p>
  <p class="result__text">${this.gameResult.result}</p>
  <button class="result__replay" type="button">Сыграть ещё раз</button>
</section>`;
  }

  onReplayButton() {}

  bind() {
    this.element.querySelector(`.result__replay`).addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.onReplayButton(this.state);
    });
  }

}
