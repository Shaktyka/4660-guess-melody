'use strict';

// Блок для вывода содержимого экрана
const mainSection = document.querySelector(`.main`);

// Массив для ссылок на экраны
const screenArray = [];

// Блок для размещения стрелок
const appBlock = document.querySelector(`.app`);

// Переменная для сохранения текущего индекса экрана
let currIndex = 0;

// Коды клавиш-стрелок влево-вправо
const KeyCodes = {
  ARROW_LEFT: 37,
  ARROW_RIGHT: 39
};

// Находим все экраны
const welcomeTemplate = document.querySelector(`#welcome`).content.querySelector(`.welcome`); // экран приветствия

const genreTemplate = document.querySelector(`#game-genre`).content.querySelector(`.game--genre`); // игра на выбор жанра

const artistTemplate = document.querySelector(`#game-artist`).content.querySelector(`.game--artist`); // игра на выбор артиста

const successTemplate = document.querySelector(`#result-success`).content.querySelector(`.result`); // экран успеха

const failTimeTemplate = document.querySelector(`#fail-time`).content.querySelector(`.result`); // экран поражения при истечении времени

const failTriesTemplate = document.querySelector(`#fail-tries`).content.querySelector(`.result`); // экран поражения при окончании попыток

const errorTemplate = document.querySelector(`#modal-error`).content.querySelector(`.modal`); // экран ошибки

const confirmTemplate = document.querySelector(`#modal-confirm`).content.querySelector(`.modal`); // экран подтвержения

// Добавляем в массив все найденные экраны
screenArray.push(welcomeTemplate, genreTemplate, artistTemplate, successTemplate, failTimeTemplate, failTriesTemplate, errorTemplate, confirmTemplate);

// Отрисовка экрана по переданному номеру
const renderScreenContent = (index) => {
  currIndex = index;
  let screenElement = screenArray[index].cloneNode(true);
  mainSection.innerHTML = ``;
  mainSection.appendChild(screenElement);
};

// Отрисовываем приветственный экран
renderScreenContent(0);

// Показ предыдущего экрана
const openPreviousScreen = () => {
  currIndex = (currIndex === 0) ? 0 : currIndex - 1;
  renderScreenContent(currIndex);
};

// Показ следующего экрана
const openNextScreen = () => {
  currIndex = (currIndex === screenArray.length - 1) ? (screenArray.length - 1) : currIndex + 1;
  renderScreenContent(currIndex);
};

// Обработка нажатий на клавиши со стрелками
const keyDownHandler = (evt) => {
  if (evt.keyCode === KeyCodes.ARROW_LEFT) {
    openPreviousScreen();
  } else if (evt.keyCode === KeyCodes.ARROW_RIGHT) {
    openNextScreen();
  }
};

// Вешаем listener на документ дял отлавливания нажатий клавиш
document.addEventListener(`keydown`, keyDownHandler);

// Помещаем кнопки-стрелки в соответствующий блок appBlock
const arrowsDiv = document.createElement(`div`);
arrowsDiv.classList.add(`arrows__wrap`);
arrowsDiv.innerHTML =
  `<style>
      .arrows__wrap {
        position: absolute;
        top: 135px;
        left: 50%;
        margin-left: -56px;
      }
      .arrows__btn {
        background: none;
        border: 2px solid black;
        padding: 5px 20px;
      }
    </style>
    <button class="arrows__btn arrows__btn--left"><-</button>
    <button class="arrows__btn arrows__btn--right">-></button>
  `;

appBlock.appendChild(arrowsDiv);

// Обработчик кликов по блоку .app. Ловим клики по кнопкам-стрелкам
const appBlockClickHandler = (evt) => {
  let clickedElement = evt.target;
  if (clickedElement.classList.contains('arrows__btn--left')) {
    openPreviousScreen();
  } else if (clickedElement.classList.contains('arrows__btn--right')) {
    openNextScreen();
  }
};

// Listener на общий блок .app
appBlock.addEventListener(`click`, appBlockClickHandler);
