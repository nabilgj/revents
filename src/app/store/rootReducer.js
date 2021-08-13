import { combineReducers } from 'redux';
import testReducer from '../../features/sandbox/testReducer';
import eventReducer from '../../features/events/EventReducer';
import modalReducer from '../common/modals/modalReducer';
import authReducer from '../../features/auth/authReducer';
import asyncReducer from '../async/asyncReducer';

const rootReducer = combineReducers({
  test: testReducer,
  event: eventReducer,
  modals: modalReducer,
  auth: authReducer,
  async: asyncReducer,
});

// into configureStore
export default rootReducer;
