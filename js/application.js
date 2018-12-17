import {renderPresenter} from './utils.js';
import GameModel from './game-model';
import WelcomePresenter from './screens/welcome-presenter.js';
// import headerPresenter from './screens/header-presenter.js';
// import genrePresenter from './screens/genre-presenter.js';
// import artistPresenter from './screens/artist-presenter.js';
// import resultPresenter from './screens/result-presenter.js';
import FailTimePresenter from './screens/fail-time-presenter.js';
import FailTriesPresenter from './screens/fail-tries-presenter.js';
import ResultPresenter from './screens/result-presenter.js';
import GamePresenter from './screens/game-presenter.js';

export default class Application {

  static showWelcome() {
    const welcome = new WelcomePresenter();
    renderPresenter(welcome.element);
  }

  // static showGame() {
  //   const model = new GameModel();
  //   // console.log('model',model);
  //   const gameScreen = new GameScreen(model);
  //   renderPresenter(gameScreen.getElementByType(model.state.questions[model.state.level][`type`]));
  //   gameScreen.startGame();
  // }

  static showFailTries() {
    const failTries = new FailTriesPresenter();
    failTries.onReplay = () => Application.showWelcome();
    renderPresenter(failTries.element);
  }

  static showFailTime() {
    const failTime = new FailTimePresenter();
    failTime.onReplay = () => Application.showWelcome();
    renderPresenter(failTime.element);
  }

  static showStats() {
    const result = new ResultPresenter(stats);
    stats.onReplay = () => Application.showWelcome();
    renderPresenter(result.element);
  }
}
