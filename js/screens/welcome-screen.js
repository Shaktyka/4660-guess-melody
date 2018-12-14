import WelcomeView from '../views/welcome-view.js';
import {renderScreen} from '../utils.js'; // добавляет элемент внутрь main.js

export const welcomeScreen = (state) => {
  const screen = new WelcomeView(state);

  screen.onStartButton = (state) => {
    renderScreen(gameScreen(state).element);
  };
  return screen;
};

export default welcomeScreen;
