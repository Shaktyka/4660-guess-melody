import WelcomeView from '../views/welcome-view.js';
import Application from '../application';

export default class WelcomePresenter {
  constructor() {
    this._view = new WelcomeView();
    this.element = this._view.element;
    this.bind()
  }

  bind() {
  	this._view.onStartButton = () => {
      Application.showGame();
  	}
  }
}