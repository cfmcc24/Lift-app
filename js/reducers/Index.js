import { combineReducers } from 'redux';
import lifts from './Lifts';
import recentLift from './RecentLift';

const liftApp = combineReducers({
  lifts,
  recentLift,
});

export default liftApp;
