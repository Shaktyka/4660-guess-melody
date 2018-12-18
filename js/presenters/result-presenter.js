// import {INITIAL_STATE} from '../data';
import Application from '../application.js';
import ResultView from '../views/result-view.js';
// import {renderPresenter} from '../utils.js';
// import {welcomePresenter} from './welcome-presenter.js';

export default class ResultPresenter {
  constructor() {
    this._view = new ResultView();
    this.element = this._view.element;
    this.onReplayButton();
  }

  onReplayButton() {
    this._view.onReplayButton = () => {
      Application.showWelcome();
    };
  }
}
