// Экран выбора исполнителя
import getElementFromTemplate from './render-element.js';
import renderScreenContent from './render-screen.js';
import backButtonClickHandler from './return-to-start.js';
import moduleResultSuccess from './result-success-screen.js';
import moduleFailTries from './fail-tries-screen.js';
import getRandom from './get-random.js';

const moduleGameArtist = getElementFromTemplate(`<section class="game game--artist">
    <header class="game__header">
      <a class="game__back" href="#">
        <span class="visually-hidden">Сыграть ещё раз</span>
        <img class="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию">
      </a>

      <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
        <circle class="timer__line" cx="390" cy="390" r="370" style="filter: url(#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center" />
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

// Элемент "Вернуться в начало"
const gameBackArtist = moduleGameArtist.querySelector(`.game__back`);

// Переход на приветственный экран
gameBackArtist.addEventListener(`click`, backButtonClickHandler);

// Форма экрана
const artistForm = moduleGameArtist.querySelector(`.game__artist`);

// Обработчик кликов по элементам формы
const artistFormClickHandler = (evt) => {
  let clickedElement = evt.target;
  if (clickedElement.classList.contains(`artist__input`)) {
    if (getRandom()) {
      renderScreenContent(moduleResultSuccess);
    } else {
      renderScreenContent(moduleFailTries);
    }
  }
};

// Вешаем listener на форму
artistForm.addEventListener(`click`, artistFormClickHandler);

export default moduleGameArtist;
