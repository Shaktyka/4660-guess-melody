// Экран выбора игры по жанрам
import {getElementFromTemplate, renderScreenContent, backButtonClickHandler} from './utils.js';
import moduleGameArtist from './game-artist-screen.js';
import headerTemplate from './header.js';
import initialState from './data';

const tracks = `<div class="track">
          <button class="track__button track__button--play" type="button"></button>
          <div class="track__status">
            <audio></audio>
          </div>
          <div class="game__answer">
            <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-1">
            <label class="game__check" for="answer-1">Отметить</label>
          </div>
        </div>`;

const moduleGameGenre = getElementFromTemplate(`<section class="game game--genre">
   ${headerTemplate(initialState)}
   <section class="game__screen">
      <h2 class="game__title">Выберите инди-рок треки</h2>
      <form class="game__tracks">
        ${tracks}
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

// Обработчик клика по кнопке "Ответить"
const replyButtonClickHandler = (evt) => {
  evt.preventDefault();
  if (replyButton.disabled !== `disabled`) {
    renderScreenContent(moduleGameArtist);
  }
};

// Обработчик клика по элементам внутри формы
const genreFormClickHandler = (evt) => {
  let clickedElement = evt.target;
  let checkedInput = answerButtons.some(getCheckedInput);

  if (clickedElement.classList.contains(`game__input`) && checkedInput) {
    replyButton.disabled = ``;
    replyButton.addEventListener(`click`, replyButtonClickHandler);
  } else {
    replyButton.disabled = `disabled`;
    replyButton.removeEventListener(`click`, replyButtonClickHandler);
  }
};

// Listener на форму
genreForm.addEventListener(`click`, genreFormClickHandler);

export default moduleGameGenre;
