// Экран выбора игры по жанрам
import {renderElement} from '../utils.js';
import {levels} from '../data';
import changeScreen from '../change-screen.js';
import {changeLives} from '../game.js';
import {playClass, managePlayTrack} from '../audio.js';

// Принимает данные конкретного уровня
const genreTemplate = (level) => `<form class="game__tracks">
      ${level.answers.map((answer, i) => `<div class="track">
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

// Проигрывающийся трек
let currentTrack = null;

// Переключение треков
const switchTrack = (track) => {

  if (currentTrack !== track) {
    currentTrack.pause();
    currentTrack = track;
    currentTrack.play();
  } else {
    currentTrack.pause();
  }
};

const genreScreen = (state) => {

  // Текущий уровень
  const currentLevel = levels[state.level];

  // Массив ответов польз-ля
  const userAnswers = [];

  // Отрисовываем экран с текущим уровнем
  const genreForm = renderElement(genreTemplate(currentLevel));

  // Все аудио-треки
  const tracks = Array.from(genreForm.querySelectorAll(`audio`));

  // Все кнопки play
  const playButtons = Array.from(genreForm.querySelectorAll(`.track__button`));

  // Добавляем autoplay первому аудиотреку
  const firstTrack = genreForm.querySelector(`audio`);
  if (!firstTrack.autoplay) {
    firstTrack.autoplay = `autoplay`;
    playButtons[0].classList.remove(playClass.PLAY);
    playButtons[0].classList.add(playClass.PAUSE);
    currentTrack = firstTrack;
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

  // Правильный ответ
  const rightAnswer = levels[state.level].task.src;

  // Обработчик клика по кнопке "Ответить"
  const replyButtonClickHandler = (evt) => {
    evt.preventDefault();
    if (replyButton.disabled !== `disabled`) {
      // Выбранные игроком ответы
      const answers = Array.from(genreForm.querySelectorAll(`input:checked`));

      answers.forEach((item) => {
        const audioSrc = item.parentElement.parentElement.querySelector(`audio`).src;
        userAnswers.push(audioSrc);
      });

      if (rightAnswer === userAnswers.join(`,`)) {
        state.answers.push({answer: true, time: 30});
        changeScreen(state);
      } else {
        state.answers.push({answer: false, time: 30});
        changeScreen(changeLives(state, state.lives - 1));
      }
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

    // Если нажатый элемент - кнопка play, то меняем класс и переключаем треки
    if (clickedElement.classList.contains(`track__button`)) {
      // Находим аудиотрек по value нажатой кнопки
      const buttonValue = clickedElement.value;
      const audioTrack = tracks[buttonValue];
      switchTrack(audioTrack);
      managePlayTrack(playButtons, tracks, clickedElement);
    }
  };

  // Listener на форму
  genreForm.addEventListener(`click`, genreFormClickHandler);

  return genreForm;
};

export default genreScreen;
