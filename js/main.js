'use strict';

// Находим все экраны
const welcomeTemplate = document.querySelector('#welcome').content.querySelector('.welcome'); // экран приветствия

const genreTemplate = document.querySelector('#game-genre').content.querySelector('.game--genre'); // игра на выбор жанра

const artistTemplate = document.querySelector('#game-artist').content.querySelector('.game--artist'); // игра на выбор артиста

const successTemplate = document.querySelector('#result-success').content.querySelector('.result'); // экран успеха

const failTimeTemplate = document.querySelector('#fail-time').content.querySelector('.result'); // экран поражения при истечении времени

const failTriesTemplate = document.querySelector('#fail-tries').content.querySelector('.result'); // экран поражения при окончании попыток

const errorTemplate = document.querySelector('#modal-error').content.querySelector('.modal'); // экран ошибки

const confirmTemplate = document.querySelector('#modal-confirm').content.querySelector('.modal'); // экран подтвержения

// Массив для ссылок на экраны
const screenArray = [];

// Добавляем в массив найденные элементы
screenArray.push(welcomeTemplate);
screenArray.push(genreTemplate);
screenArray.push(artistTemplate);
screenArray.push(successTemplate);
screenArray.push(failTimeTemplate);
screenArray.push(failTriesTemplate);
screenArray.push(errorTemplate);
screenArray.push(confirmTemplate);

console.log(screenArray);
