// Возврат к приветственному экрану
import welcomeScreen from './welcome-screen.js';
import {renderScreen} from '../utils.js';

const backButtonClickHandler = (evt) => {
  evt.preventDefault();
  renderScreen(welcomeScreen());
};

export default backButtonClickHandler;
