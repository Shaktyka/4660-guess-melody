import WelcomeView from '../views/welcome-view.js';
import Application from '../application.js';

export default class WelcomePresenter {
  constructor(model) {
    this._view = new WelcomeView(model);
    this.element = this._view.element;
    this.onStartButton();
  }

  onStartButton() {
    this._view.onStartButton = () => {
      Application.showGame();
    };
  }
}
