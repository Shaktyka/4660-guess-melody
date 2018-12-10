import AbstractView from './abstract-view.js';
// import {levels} from '../data';
import {initialState} from '../data';
import {gameResults} from '../game-results.js';
import countPoints from '../game-points.js';
import inclineNouns from '../incline-nouns.js';

const statistics = [4, 5, 8, 10, 11];

export default class ResultView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
    this.result.points = countPoints(state.answers, state.lives);
    this.result.time = state.time;
    this.state.errors = initialState.lives - state.lives;
    // this.result.time = countStatistics(state);

    this.gameResult = gameResults(statistics, state); // или вместо state this.result?
    // Тут пока непонятно
  }

  get template() {
    return `<section class="result">
  <div class="result__logo">
    <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83">
  </div>
  <h2 class="result__title">Вы настоящий меломан!</h2>
  <p class="result__total">За ${data.minutes} ${inclineNouns(data.minutes, [`минута`, `минуты`, `минут`])} и ${data.seconds} ${inclineNouns(data.seconds, [`секунда`, `секунды`, `секунд`])} вы набрали ${data.points} баллов (8 быстрых), совершив ${data.errors} ${inclineNouns(data.errors, [`ошибка`, `ошибки`, `ошибок`])}</p>
  <p class="result__text">${data.result}</p>
  <button class="result__replay" type="button">Попробовать ещё раз</button>
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
