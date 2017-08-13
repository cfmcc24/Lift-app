import { combineReducers } from 'redux';
import lifts from './Lifts';

const liftApp = combineReducers({
  lifts,
});

export default liftApp;
