import WelcomeView from '../views/welcome-view.js';
import {renderScreen} from '../utils.js';

export const welcomeScreen = () => {
  const screen = new WelcomeView();

  screen.onStartButton = (state) => {
    renderScreen(gameScreen(state).element);
  };
  return screen;
};

export default welcomeScreen;
