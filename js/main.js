'use strict';

// Блок для вывода содержимого экрана
const mainSection = document.querySelector(`.main`);

// Массив для ссылок на экраны
const screenArray = [];

// Блок для размещения стрелок
const appBlock = document.querySelector(`.app`);

// Переменная для сохранения текущего индекса экрана
let currIndex = 0;

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
screenArray.push(welcomeTemplate);
screenArray.push(genreTemplate);
screenArray.push(artistTemplate);
screenArray.push(successTemplate);
screenArray.push(failTimeTemplate);
screenArray.push(failTriesTemplate);
screenArray.push(errorTemplate);
screenArray.push(confirmTemplate);

// Отрисовка экрана по переданному номеру
const renderScreenContent = (index) => {
  currIndex = index;
  const screenElement = screenArray[index].cloneNode(true);
  mainSection.innerHTML = ``;
  mainSection.appendChild(screenElement);
};

// Отрисовываем приветственный экран
renderScreenContent(0);

// Добавляем listeners на клавиатурные события
const KEY_VALUE = {
  ARROW_LEFT: 37,
  ARROW_RIGHT: 39
};

const ARROW_BUTTON_VALUE = {
  LEFT: `<-`,
  RIGHT: `->`
};

// Показ предыдущего экрана
const openPreviousScreen = () => {
  currIndex = --currIndex;
  currIndex = (currIndex < 0) ? 0 : currIndex;
  renderScreenContent(currIndex);
};

// Показ предыдущего экрана
const openNextScreen = () => {
  currIndex = ++currIndex;
  currIndex = (currIndex === screenArray.length) ? (screenArray.length - 1) : currIndex;
  renderScreenContent(currIndex);
};

const arrowButtonClickHandler = (buttonText) => {
  if (buttonText === ARROW_BUTTON_VALUE.LEFT) {
    openPreviousScreen();
  } else {
    openNextScreen();
  }
};

// Обработка нажатий на клавиши со стрелками
const keyDownHandler = (evt) => {
  if (evt.keyCode === KEY_VALUE.ARROW_LEFT) {
    openPreviousScreen();
  } else if (evt.keyCode === KEY_VALUE.ARROW_RIGHT) {
    openNextScreen();
  }
};

document.addEventListener(`keydown`, keyDownHandler);

// Помещаем стрелки в соответствующий блок appBlock
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
    <button class="arrows__btn"><-</button>
    <button class="arrows__btn">-></button>
  `;

appBlock.appendChild(arrowsDiv);

// Кнопки-стрелки переключения экранов
const arrowButtons = document.querySelectorAll(`.arrows__btn`);

// Вешаем на стрелки обработчик нажатия
arrowButtons.forEach(function (button) {
  button.addEventListener(`click`, (evt) => {
    let clickedButton = evt.target;
    let buttonText = clickedButton.textContent;
    arrowButtonClickHandler(buttonText);
  });
});
