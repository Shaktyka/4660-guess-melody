// Экран выбора игры по жанрам
import {renderElement, renderScreen} from '../utils.js';
import artistScreen from './artist-screen.js';
// import header from './header.js';
// import {initialState} from '../data';
import {levels} from '../data';

// Принимает данные конкретного уровня
const genreTemplate = (level) => `<form class="game__tracks">
      ${level.answers.map((answer, i) => `<div class="track">
          <button class="track__button track__button--play" type="button"></button>
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


const genreScreen = (state) => {

  // Генерим экран с данными текущего уровня
  const currentLevel = levels[state.level];
  const genreForm = renderElement(genreTemplate(currentLevel));

  // Добавляем autoplay первому аудиотрэку
  const firstTrack = genreForm.querySelector(`audio`);
  if (!firstTrack.autoplay) {
    firstTrack.autoplay = `autoplay`;
  }

  // Кнопка "Ответить"
  const replyButton = genreForm.querySelector(`.game__submit`);
  replyButton.disabled = `disabled`;

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
      renderScreen(artistScreen());
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

  return genreForm;
};

export default genreScreen;
