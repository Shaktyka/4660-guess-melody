// Экран выбора игры по жанрам

import getElementFromTemplate from './render-element.js';
import renderScreenContent from './render-screen.js';
import moduleGameArtist from './game-artist-screen.js';
import backButtonClickHandler from './return-to-start.js';

const moduleGameGenre = getElementFromTemplate(`<section class="game game--genre">
    <header class="game__header">
      <a class="game__back" href="#">
        <span class="visually-hidden">Сыграть ещё раз</span>
        <img class="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию">
      </a>

      <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
        <circle class="timer__line" cx="390" cy="390" r="370" style="filter: url(#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"/>
      </svg>

      <div class="timer__value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer__mins">05</span>
        <span class="timer__dots">:</span>
        <span class="timer__secs">00</span>
      </div>

      <div class="game__mistakes">
        <div class="wrong"></div>
        <div class="wrong"></div>
        <div class="wrong"></div>
      </div>
    </header>

    <section class="game__screen">
      <h2 class="game__title">Выберите инди-рок треки</h2>
      <form class="game__tracks">
        <div class="track">
          <button class="track__button track__button--play" type="button"></button>
          <div class="track__status">
            <audio></audio>
          </div>
          <div class="game__answer">
            <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-1">
            <label class="game__check" for="answer-1">Отметить</label>
          </div>
        </div>

        <div class="track">
          <button class="track__button track__button--play" type="button"></button>
          <div class="track__status">
            <audio></audio>
          </div>
          <div class="game__answer">
            <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-2">
            <label class="game__check" for="answer-2">Отметить</label>
          </div>
        </div>

        <div class="track">
          <button class="track__button track__button--pause" type="button"></button>
          <div class="track__status">
            <audio></audio>
          </div>
          <div class="game__answer">
            <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-3">
            <label class="game__check" for="answer-3">Отметить</label>
          </div>
        </div>

        <div class="track">
          <button class="track__button track__button--play" type="button"></button>
          <div class="track__status">
            <audio></audio>
          </div>
          <div class="game__answer">
            <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-4">
            <label class="game__check" for="answer-4">Отметить</label>
          </div>
        </div>

        <button class="game__submit button" type="submit">Ответить</button>
      </form>
    </section>
  </section>`);

// Кнопка "Ответить"
const replyButton = moduleGameGenre.querySelector(`.game__submit`);

// Делаем кнопку "Ответить" на старте недоступной
replyButton.disabled = `disabled`;

// Элемент "Вернуться в начало"
const gameBackGenre = moduleGameGenre.querySelector(`.game__back`);

// Переход на приветственный экран
gameBackGenre.addEventListener(`click`, backButtonClickHandler);

// Форма с треками и ответами
const genreForm = moduleGameGenre.querySelector(`.game__tracks`);

// Коллекция чекбоксов ответов
let answerButtons = genreForm.querySelectorAll(`.game__input`);
answerButtons = Array.from(answerButtons);

// Проверяем, есть ли хоть 1 отмеченный чекбокс
const getCheckedInput = (input) => {
  return input.checked;
};

// Обработчик клика по элементам внутри формы
const genreFormClickHandler = (evt) => {
  let clickedElement = evt.target;

  if (clickedElement.classList.contains(`game__input`)) {
    // Разлочиваем кнопку
    replyButton.disabled = ``;
    // Вешаем listener на кнопку replyButton
    replyButton.addEventListener(`click`, (e) => {
      e.preventDefault();
      // Проверяем, есть ли хоть 1 чекнутый инпут. Если да, то рендерим следующий экран
      let checkedInput = answerButtons.some(getCheckedInput);
      if (checkedInput) {
        renderScreenContent(moduleGameArtist);
      }
    });
  }
};

// Listener на форму
genreForm.addEventListener(`click`, genreFormClickHandler);

export default moduleGameGenre;
