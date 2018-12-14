import WelcomeView from '../views/welcome-view.js';
import {renderScreen} from '../utils.js'; // добавляет элемент внутрь main.js
import gameScreen from './game-screen.js';

export const welcomeScreen = (state) => {
  const screen = new WelcomeView(state);

  screen.onStartButton = () => {
    renderScreen(gameScreen(state).element);
  };
  return screen;
};

export default welcomeScreen;
