import {renderPresenter} from './utils.js';
import GameModel from './game-model';
import WelcomePresenter from './presenters/welcome-presenter.js';
import headerPresenter from './presenters/header-presenter.js';
import genrePresenter from './presenters/genre-presenter.js';
import artistPresenter from './presenters/artist-presenter.js';
// import resultPresenter from './presenters/result-presenter.js';
import FailTimePresenter from './presenters/fail-time-presenter.js';
import FailTriesPresenter from './presenters/fail-tries-presenter.js';
import ResultPresenter from './presenters/result-presenter.js';
import GameScreen from './game-screen.js';

export default class Application {

  static showWelcome() {
    const model = new GameModel();
    const welcome = new WelcomePresenter(model);
    renderPresenter(welcome.element);
  }

  static showGame() {
    const model = new GameModel();
    const gameScreen = new GameScreen(model);
    renderPresenter(gameScreen.element);
    gameScreen.start();
  }

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
