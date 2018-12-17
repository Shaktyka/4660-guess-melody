import AbstractView from './abstract-view.js';
import inclineNouns from '../incline-nouns.js';
import {INITIAL_STATE} from '../data.js';


export default class WelcomeView extends AbstractView {
  constructor(initialState) {
    super();
    this.state = INITIAL_STATE;
  }

  // ${this.state.time / (60 * 1000)} ${inclineNouns(this.state.time / (60 * 1000), [`минута`, `минуты`, `минут`])}
  // ${this.state.lives ${inclineNouns(this.state.lives, [`ошибка`, `ошибки`, `ошибок`])}

  get template() {
    return `<section class="welcome">
<div class="welcome__logo">
  <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83">
</div>
<button class="welcome__button"><span class="visually-hidden">Начать игру</span></button>
<h2 class="welcome__rules-title">Правила игры</h2>
<p class="welcome__text">Правила просты:</p>
<ul class="welcome__rules-list">
  <li>За ${this.state.time / (60 * 1000)} ${inclineNouns(this.state.time / (60 * 1000), [`минута`, `минуты`, `минут`])} нужно ответить на все вопросы.</li>
  <li>Можно допустить ${this.state.lives} ${inclineNouns(this.state.lives, [`ошибка`, `ошибки`, `ошибок`])}.</li>
</ul>
<p class="welcome__text">Удачи!</p>
</section>`;
  }

  onStartButton() {}

  bind() {
    this.element.querySelector(`.welcome__button`).addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.onStartButton(this.state);
    });
  }
}


