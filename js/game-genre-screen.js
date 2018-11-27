// Экран выбора игры по жанрам
import {getElementFromTemplate, renderScreenContent, backButtonClickHandler} from './utils.js';
import moduleGameArtist from './game-artist-screen.js';
import headerTemplate from './header.js';

const moduleGameGenre = getElementFromTemplate(`<section class="game game--genre">
   ${headerTemplate}
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
