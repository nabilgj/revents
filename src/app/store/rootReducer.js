import { combineReducers } from 'redux';
import testReducer from '../../features/sandbox/testReducer';
import eventReducer from '../../features/events/EventReducer';

const rootReducer = combineReducers({
  test: testReducer,
  event: eventReducer,
});

// into configureStore
export default rootReducer;
