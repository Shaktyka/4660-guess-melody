import {INITIAL_STATE} from '../data';
import FailTriesView from '../views/fail-tries-view.js';
import {renderScreen} from '../utils.js';
import {welcomeScreen} from './welcome-screen.js';

const failTriesScreen = (state) => {
  const screen = new FailTriesView(state);

  screen.onReplayButton = () => {
    renderScreen(welcomeScreen(INITIAL_STATE).element);
  };
  return screen;
};

export default failTriesScreen;
