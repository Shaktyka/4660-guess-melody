import {INITIAL_STATE} from '../data';
import ResultView from '../views/result-view.js';
import {renderScreen} from '../utils.js';
import {welcomeScreen} from './welcome-screen.js';

const resultScreen = (state) => {
  const screen = new ResultView(state);

  screen.onReplayButton = () => {
    renderScreen(welcomeScreen(INITIAL_STATE).element);
  };
  return screen;
};

export default resultScreen;
