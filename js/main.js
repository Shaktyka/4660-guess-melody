'use strict';

// Блок для вывода содержимого экрана
const mainSection = document.querySelector(`.main`);

// Переменная для сохранения текущего индекса экрана
let currIndex = 0;

// Массив для ссылок на экраны
const screenArray = [];

// Находим все экраны
const welcomeTemplate = document.querySelector(`#welcome`).content.querySelector(`.welcome`); // экран приветствия

const genreTemplate = document.querySelector(`#game-genre`).content.querySelector(`.game--genre`); // игра на выбор жанра

const artistTemplate = document.querySelector(`#game-artist`).content.querySelector(`.game--artist`); // игра на выбор артиста

const successTemplate = document.querySelector(`#result-success`).content.querySelector(`.result`); // экран успеха

const failTimeTemplate = document.querySelector(`#fail-time`).content.querySelector(`.result`); // экран поражения при истечении времени

const failTriesTemplate = document.querySelector(`#fail-tries`).content.querySelector(`.result`); // экран поражения при окончании попыток

const errorTemplate = document.querySelector(`#modal-error`).content.querySelector(`.modal`); // экран ошибки

const confirmTemplate = document.querySelector(`#modal-confirm`).content.querySelector(`.modal`); // экран подтвержения

// Добавляем в массив найденные элементы
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

// Обработка нажатий на клавиши со стрелками
const keyDownHandler = (evt) => {
  if (evt.keyCode === KEY_VALUE.ARROW_LEFT) {
    currIndex = --currIndex;
    currIndex = (currIndex < 0) ? 0 : currIndex;
  } else if (evt.keyCode === KEY_VALUE.ARROW_RIGHT) {
    currIndex = ++currIndex;
    currIndex = (currIndex === screenArray.length) ? (screenArray.length - 1) : currIndex;
  }
  renderScreenContent(currIndex);
};

document.addEventListener(`keydown`, keyDownHandler);

//console.log(screenArray);
