// Этот класс будет выступать в роли контроллера (Controller) (или презентера (Presenter) 
// и будет связывать модель вашей игры с представлением

let game;
let timer;
const ONE_SECOND = 1000;

// const updateHeader = (state) => {
  // updateView(headerElement, new HeaderView(state));
// };

export default class GameScreen {
  // Конструктор должен создавать и управлять представлением игры GameView
  // Инициал-ция и настройка игры
  constructor(model) {
  	this.model = model
  }

  // Метод init или start должен устанавливать изначальное состояние игры и начинать игру
  const start() {
    game = Object.assign({}, INITIAL_GAME);

    //  updateGame(game);
    //  changeScreen(gameContainerElement);
    startTimer();
  }

  // Запускать/останавливать отсчёт времени в игре и обновлять модель и представление соответствующим образом
  const tick = () => {
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

  changeLevel() {
    
  }

  // Обработка ответов польз-лей

  // Должен реагировать на действия, происходящие в представлении (выбор ответа игроком), 
  // обрабатывать его и обновлять модель и представление в соответствии с ответом
}

export default GameScreen;
