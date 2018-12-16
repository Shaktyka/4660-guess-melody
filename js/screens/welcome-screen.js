import WelcomeView from '../views/welcome-view.js';
import Application from '../application';

export default class WelcomeScreen {
  constructor() {
    this.welcomeView = new WelcomeView();
    this.welcomeView.onStartButton = () => Application.showGame();
  }

  get screen() {
    return this.welcomeView.element;
  }
}
