// Возврат к приветственному экрану
import welcomeScreen from './welcome-screen.js';
import renderScreenContent from './render-screen.js';

const backButtonClickHandler = (evt) => {
  evt.preventDefault();
  renderScreenContent(welcomeScreen);
};

export default backButtonClickHandler;
