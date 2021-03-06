import AbstractView from './abstract-view.js';
import {LEVELS} from '../data';
import {initAutoplay, addArtistListener} from '../audio/audio.js';

export default class WelcomeView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
    this.level = LEVELS[state.level];
  }

  get template() {
    return `<div><div class="game__track">
        <button class="track__button track__button--play" type="button"></button>
        <audio src="${this.level.task.src}"></audio>
      </div>
      <form class="game__artist">
        ${this.level.answers.map((answer, i) => `<div class="artist">
          <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-${i}" id="answer-${i}">
          <label class="artist__name" for="answer-${i}">
            <img class="artist__picture" src="${answer.image}" alt="${answer.artist}">
            ${answer.artist}
          </label>
        </div>`).join(``)}
      </form></div>`;
  }

  onAnswer() {}

  bind() {
    // Кнопка Play и трек
    const playButton = this.element.querySelector(`.track__button`);
    const audio = this.element.querySelector(`audio`);

    addArtistListener(playButton, audio);

    // Меняем вид кнопки Play
    initAutoplay(audio, playButton);

    // Ответ игрока
    const answer = this.level.task.image;

    // Вешаем обработчик
    this.element.querySelectorAll(`.artist`).forEach((item) => {
      item.addEventListener(`click`, (evt) => {
        evt.preventDefault();
        this.onAnswer(item, answer);
      });
    });
  }

}
