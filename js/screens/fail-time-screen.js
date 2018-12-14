import {INITIAL_STATE} from '../data';
import FailTimeView from '../fail-time-view.js';
import {renderScreen} from './utils.js';
import {welcomeScreen} from './welcome-screen.js';

const failTimeScreen = (state) => {
  const screen = new FailTimeView(state);

  screen.onReplayButton = () => {
    renderScreen(welcomeScreen(INITIAL_STATE).element);
  };
  return screen;
};

export default failTimeScreen;
