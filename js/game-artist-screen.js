// Экран выбора исполнителя
import {renderElement, renderScreen, getRandom} from './utils.js';
import moduleResultSuccess from './result-success-screen.js';
import moduleFailTries from './fail-tries-screen.js';
import header from './header.js';
import initialState from './data';

// const header = renderElement(headerTemplate);

const moduleGameArtist = renderElement(`<section class="game game--artist">
    ${header(initialState)}
    <section class="game__screen">
      <h2 class="game__title">Кто исполняет эту песню?</h2>
      <div class="game__track">
        <button class="track__button track__button--play" type="button"></button>
        <audio></audio>
      </div>

      <form class="game__artist">
        <div class="artist">
          <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-1" id="answer-1">
          <label class="artist__name" for="answer-1">
            <img class="artist__picture" src="http://placehold.it/134x134" alt="Пелагея">
            Пелагея
          </label>
        </div>

        <div class="artist">
          <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-2" id="answer-2">
          <label class="artist__name" for="answer-2">
            <img class="artist__picture" src="http://placehold.it/134x134" alt="Пелагея">
            Краснознаменная дивизия имени моей бабушки
          </label>
        </div>

        <div class="artist">
          <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-3" id="answer-3">
          <label class="artist__name" for="answer-3">
            <img class="artist__picture" src="http://placehold.it/134x134" alt="Пелагея">
            Lorde
          </label>
        </div>
      </form>
    </section>
  </section>`);

// Форма
const artistForm = moduleGameArtist.querySelector(`.game__artist`);

// Обработчик кликов по элементам формы
const artistFormClickHandler = (evt) => {
  let clickedElement = evt.target;
  if (clickedElement.classList.contains(`artist__input`)) {
    return (getRandom()) ? renderScreen(moduleResultSuccess) : renderScreen(moduleFailTries);
  }
  return false;
};

// Вешаем listener на форму
artistForm.addEventListener(`click`, artistFormClickHandler);

export default moduleGameArtist;
