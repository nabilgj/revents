import {
  asyncActionStart,
  asyncActionFisnish,
  asyncActionError,
} from '../../app/async/asyncReducer';
import { delay } from '../../app/common/util/util';

import { toast } from 'react-toastify';

const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

// into Sandbox
export const increment = (amount) => {
  return async (dispatch) => {
    dispatch(asyncActionStart());

    try {
      await delay(1000);

      dispatch({ type: INCREMENT_COUNTER, payload: amount });
      dispatch(asyncActionFisnish());
    } catch (error) {
      dispatch(asyncActionError(error));
      toast.error(error);
    }
  };
};

// into Sandbox
export const decrement = (amount) => {
  return async (dispatch) => {
    dispatch(asyncActionStart());

    try {
      await delay(1000);

      dispatch({ type: DECREMENT_COUNTER, payload: amount });
      dispatch(asyncActionFisnish());
    } catch (error) {
      dispatch(asyncActionError(error));
    }
  };
};

const initialState = {
  data: 42,
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        data: state.data + action.payload,
      };

    case DECREMENT_COUNTER:
      return {
        ...state,
        data: state.data - action.payload,
      };

    default:
      return state;
  }
};

// into store inside app folder
export default testReducer;
