// import {INITIAL_STATE} from '../data';
import Application from '../application.js';
import FailTriesView from '../views/fail-tries-view.js';
// import {renderPresenter} from '../utils.js';
// import {welcomePresenter} from './welcome-presenter.js';

export default class FailTriesPresenter {
  constructor() {
    this._view = new FailTriesView();
    this.element = this._view.element;
    this.onReplayButton();
  }

  onReplayButton() {
    this._view.onReplayButton = () => {
      Application.showWelcome();
    };
  }
}
