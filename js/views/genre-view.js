import AbstractView from './abstract-view.js';
import {LEVELS} from '../levels';
// import {initAutoplay, initPlayListeners} from '../audio/audio.js';

export default class GenreView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
    this.level = LEVELS[state.level];
  }

  get template() {
    return `<form class="game__tracks">
      ${this.level.answers.map((answer, i) => `<div class="track">
          <button class="track__button track__button--play" type="button" value="${i}"></button>
          <div class="track__status">
            <audio src="${answer.src}"></audio>
          </div>
          <div class="game__answer">
            <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-${i}" id="answer-${i}">
            <label class="game__check" for="answer-${i}">Отметить</label>
          </div>
        </div>`).join(``)}
        <button class="game__submit button" type="submit">Ответить</button>
      </form>`;
  }

  onCheckbox() {}

  onPlayPause() {}

  onAnswer() {}

  bind() {
    // Обработчик кликов по чек-боксам треков (ответы)
    this.element.querySelectorAll(`.game__input`).forEach((item) => {
      item.addEventListener(`change`, () => {
        this.onCheckbox();
      });
    });

    // Обработчик кликов по кнопкам Play
    this.element.querySelectorAll(`.track`).forEach((item) => {
      item.querySelector(`.track__button`).addEventListener(`click`, (evt) => {
        const button = evt.target;
        const audio = item.querySelector(`audio`);

        evt.preventDefault();
        this.onPlayPause(button, audio);
      });
    });

    // Обработчик кнопки "Ответить"
    this.element.querySelector(`.game__submit`).addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.onAnswer();
    });

    // Аудио-треки
    // const tracks = Array.from(this.element.querySelectorAll(`audio`));
    // Кнопки play
    // const playButtons = Array.from(this.element.querySelectorAll(`.track__button`));
    // Меняем вид кнопки Play + добавляем автоплей
    // initAutoplay(tracks[0], playButtons[0]);
    // Добавляем listeners на кнопки PlayButtons
    // initPlayListeners(playButtons, tracks);

    // Массив ответов польз-ля
    // const userAnswers = [];
    // Правильный ответ
    // const rightAnswer = this.level.task.src;
    // Коллекция чекбоксов ответов
    // const answerButtons = Array.from(this.element.querySelectorAll(`.game__input`));

    // Проверяем, есть ли хоть 1 отмеченный чекбокс
    // const getCheckedInput = (input) => {
      // return input.checked;
    // };

    // Кнопка "Ответить"
    // const replyButton = this.element.querySelector(`.game__submit`);
    // replyButton.disabled = `disabled`;

    // replyButton.addEventListener(`click`, (evt) => {
      // evt.preventDefault();

      // if (replyButton.disabled !== `disabled`) {
        // Выбранные игроком ответы
        // const answers = Array.from(this.element.querySelectorAll(`input:checked`));

        // answers.forEach((item) => {
          // const audioSrc = item.parentElement.parentElement.querySelector(`audio`).src;
          // userAnswers.push(audioSrc);
        // });
      // }
      // this.onAnswer(rightAnswer, userAnswers);
    // });

    // Listener на форму
    // this.element.addEventListener(`click`, (evt) => {
      // let clickedElement = evt.target;
      // let checkedInput = answerButtons.some(getCheckedInput);

      // if (clickedElement.classList.contains(`game__input`) && checkedInput) {
        // replyButton.disabled = ``;
      // } else {
        // replyButton.disabled = `disabled`;
      // }
    // });
  }

}
