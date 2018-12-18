import Application from '../application.js';
import HeaderView from '../views/header-view.js';
// import {INITIAL_STATE} from '../data.js';
// import {renderPresenter} from '../utils.js';
// import {welcomePresenter} from './welcome-presenter.js';

export default class HeaderPresenter {
  constructor() {
    this._view = new HeaderView();
    this.element = this._view.element;
    this.onStartButton();
  }

  onStartButton() {
    this._view.onStartButton = () => {
      // renderPresenter(welcomePresenter(INITIAL_STATE).element);
      Application.showWelcome();
    };
  }
}
