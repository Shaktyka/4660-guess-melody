// Блок для вывода содержимого экрана
const mainSection = document.querySelector(`.main`);

import getElementFromTemplate from '/js/render-element.js';
//const getElementFromTemplate = (template) => {
//  let div = document.createElement('div');
//  div.innerHTML = template;
//  const element = div.firstChild;
//  
//  return element;
//};

import welcomeScreen from '/js/welcome-screen.js';
//const welcomeScreen = getElementFromTemplate(`<section class="welcome">
//    <div class="welcome__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
//    <button class="welcome__button"><span class="visually-hidden">Начать игру</span></button>
//    <h2 class="welcome__rules-title">Правила игры</h2>
//    <p class="welcome__text">Правила просты:</p>
//    <ul class="welcome__rules-list">
//      <li>За 5 минут нужно ответить на все вопросы.</li>
//      <li>Можно допустить 3 ошибки.</li>
//    </ul>
//    <p class="welcome__text">Удачи!</p>
//  </section>`);

import renderScreenContent from '/js/render-screen.js';
//const renderScreenContent = (element) => {
//  mainSection.innerHTML = ``;
//  mainSection.appendChild(element);
//};

renderScreenContent(welcomeScreen);
