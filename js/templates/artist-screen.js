// Экран выбора исполнителя
import {renderElement, renderScreen, getRandom} from '../utils.js';
import successScreen from './success-screen.js';
import failTriesScreen from './fail-tries-screen.js';
import header from './header.js';
import {initialState} from '../data';
import {levels} from '../data';

const artistTemplate = ({level}) => `<section class="game game--artist">
    <section class="game__screen">
      <h2 class="game__title">Кто исполняет эту песню?</h2>
      <div class="game__track">
        <button class="track__button track__button--play" type="button"></button>
        <audio src="${levels[level].task.src}"></audio>
      </div>

      <form class="game__artist">
        ${levels[level].answers.map((answer, i) => `<div class="artist">
          <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-${i}" id="answer-${i}">
          <label class="artist__name" for="answer-${i}">
            <img class="artist__picture" src="${answer.image}" alt="${answer.artist}">
            ${answer.artist}
          </label>
        </div>`).join(``)}
      </form>
    </section>
  </section>`;

const artistScreen = () => {

  const screen = renderElement(artistTemplate(initialState));

  screen.insertAdjacentElement(`afterBegin`, header());

  // Форма
  const artistForm = screen.querySelector(`.game__artist`);

  // Обработчик кликов по элементам формы
  const artistFormClickHandler = (evt) => {
    let clickedElement = evt.target;
    if (clickedElement.classList.contains(`artist__input`)) {
      return (getRandom()) ? renderScreen(successScreen()) : renderScreen(failTriesScreen());
    }
    return false;
  };

  // Вешаем listener на форму
  artistForm.addEventListener(`click`, artistFormClickHandler);

  return screen;
};

export default artistScreen;
