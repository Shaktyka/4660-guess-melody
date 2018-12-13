import FailTimeView from '../fail-time-view.js';
import {renderElement} from '../utils.js';

const failTimeScreen = (state) => {
  const screen = new FailTimeView(state);

  screen.onReplayButton = () => {
    renderScreen(welcomeScreen(INITIAL_STATE).element);
  };
  return screen;
};

export default failTimeScreen;
