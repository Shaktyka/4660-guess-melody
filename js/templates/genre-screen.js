// Экран выбора игры по жанрам
import {renderElement, renderScreen} from '../utils.js';
import artistScreen from './artist-screen.js';
import header from './header.js';
import {initialState} from '../data';
import {levels} from '../data';

// Принимает данные конкретного уровня
const genreTemplate = ({level}) => `<section class="game game--genre">
   <section class="game__screen">
      <h2 class="game__title">Выберите инди-рок треки</h2>

      <form class="game__tracks">
      ${levels[level].answers.map((answer, i) => `<div class="track">
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
      </form>

    </section>
  </section>`;


const genreScreen = () => {

  const screen = renderElement(genreTemplate(initialState));

  screen.insertAdjacentElement(`afterBegin`, header());

  // Кнопка "Ответить"
  const replyButton = screen.querySelector(`.game__submit`);

  // Делаем кнопку "Ответить" на старте недоступной
  replyButton.disabled = `disabled`;

  // Форма с треками и ответами
  const genreForm = screen.querySelector(`.game__tracks`);

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

  return screen;
};

export default genreScreen;
