import {INITIAL_STATE} from '../data';
import FailTimeView from '../views/fail-time-view.js';
import {renderPresenter} from '../utils.js';
import {welcomePresenter} from './welcome-presenter.js';

const failTimeScreen = (state) => {
  const screen = new FailTimeView(state);

  screen.onReplayButton = () => {
    renderScreen(welcomeScreen(INITIAL_STATE).element);
  };
  return screen;
};

export default failTimeScreen;
