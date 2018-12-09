// Возврат к приветственному экрану
import welcomeScreen from './welcome-screen.js';
import {renderScreen} from '../utils.js';
import {initialState} from '../data';

const backButtonClickHandler = (evt) => {
  evt.preventDefault();
  renderScreen(welcomeScreen(initialState));
};

export default backButtonClickHandler;
