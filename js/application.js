import {renderScreen} from './utils.js';
import GameModel from './game-model';
import WelcomeScreen from './screens/welcome-screen.js';
// import header from './screens/header.js';
// import genreScreen from './screens/genre-screen.js';
// import artistScreen from './screens/artist-screen.js';
// import resultScreen from './screens/result-screen.js';
import FailTimeScreen from './screens/fail-time-screen.js';
import FailTriesScreen from './screens/fail-tries-screen.js';
import ResultScreen from './screens/result-screen.js';
import GameScreen from './screens/game-screen.js';

export default class Application {

  static showWelcome() {
    const welcome = new WelcomeScreen();
    renderScreen(welcome.element);
  }

  static showGame() {
    const model = new GameModel();
    // console.log('model',model);
    const gameScreen = new GameScreen(model);
    renderScreen(gameScreen.getElementByType(model.state.questions[model.state.level][`type`]));
    gameScreen.startGame();
  }

  static showFailTries() {
    const failTries = new FailTriesScreen();
    failTries.onReplay = () => Application.showWelcome();
    renderScreen(failTries.element);
  }

  static showFailTime() {
    const failTime = new FailTimeScreen();
    failTime.onReplay = () => Application.showWelcome();
    renderScreen(failTime.element);
  }

  static showStats() {
    const resultScreen = new ResultScreen(stats);
    stats.onReplay = () => Application.showWelcome();
    renderScreen(resultScreen.element);
  }
}
