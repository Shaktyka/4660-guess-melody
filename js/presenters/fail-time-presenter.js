// import {INITIAL_STATE} from '../data';
import Application from '../application.js';
import FailTimeView from '../views/fail-time-view.js';
// import {renderPresenter} from '../utils.js';
// import {welcomePresenter} from './welcome-presenter.js';

export default class FailTimePresenter {
  constructor() {
    this._view = new FailTimeView();
    this.element = this._view.element;
    this.onReplayButton();
  }

  onReplayButton() {
    this._view.onReplayButton = () => {
      Application.showWelcome();
    };
  }
}
