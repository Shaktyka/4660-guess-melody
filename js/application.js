import {renderScreen} from './utils.js';
// Application будет выполнять роль роутера (Router) в вашем приложении и управлять всеми экранами вашей игры

export default class Application {

  static showWelcome() {
    const welcome = new WelcomeScreen();
    renderScreen(welcome.element);
  }

  static showGame(userName) {
    const model = new GameModel();
    const gameScreen = new GameScreen(model);
    renderScreen(gameScreen.element);
    gameScreen.startGame();
  }

  static showResult(state) {
    const resultScreen = new ResultScreen(stats);
    renderScreen(resultScreen.element);
  }
}
