import {INITIAL_STATE} from '../data';
import HeaderView from '../views/header-view.js';
import {renderScreen} from './utils.js';

import {welcomeScreen} from './welcome-screen.js';

const header = (state) => {
  const element = new HeaderView(state);

  element.onStartButton = () => {
    // Обнуляем массив ответов (здесь или ещё при клике по кнопке "Начать"?)
    if (state.answers.length > 0) {
      state.answers.length = 0;
    }
    renderScreen(welcomeScreen(INITIAL_STATE).element);
  };
  return element;
};

export default header;
