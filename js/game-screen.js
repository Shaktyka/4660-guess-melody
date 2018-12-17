// import {changeLevel, changeLives} from './game.js';
// import countPoints from './game-points.js';
// import gameResults from '/game-results.js';

let game;
let timer;
const ONE_SECOND = 1000;

// const updateHeader = (state) => {
  // updateView(headerElement, new HeaderView(state));
// };

export default class GameScreen {
  // Инициал-ция и настройка игры
  constructor(model) {
  	this.model = model
  }

  start() {
    game = Object.assign({}, INITIAL_GAME);
    //  updateGame(game);
    //  changeScreen(gameContainerElement);
    startTimer();
  }

  // Запускать/останавливать отсчёт времени в игре и обновлять модель и представление соответствующим образом
  tick() {
    game = Object.assign({}, game, {
      time: game.time - 1
    });
    // updateHeader(game);
  };

  // Запуск таймера
  const startTimer = () => {
    timer = setTimeout(() => {
    tick();
    startTimer();
    }, ONE_SECOND);
  }

  // Остановка таймера
  const stopTimer = () => {
    clearTimeout(timer);
  }

  // Обновление статистики игры
  const updateHeader = () => {}

  changeLevel() {}

  // Обработка ответов польз-лей

  // Должен реагировать на действия, происходящие в представлении (выбор ответа игроком), 
  // обрабатывать его и обновлять модель и представление в соответствии с ответом
}

export default GameScreen;
