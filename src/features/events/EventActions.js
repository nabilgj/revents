import {
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  FETCH_EVENTS,
} from './EventsConstants';
import {
  asyncActionStart,
  asyncActionFisnish,
  asyncActionError,
} from '../../app/async/asyncReducer';
import { fetchSampleData } from '../../app/api/mockApi';

// into
export const loadEvents = () => {
  return async (dispatch) => {
    dispatch(asyncActionStart());
    try {
      const events = await fetchSampleData();
      dispatch({ type: FETCH_EVENTS, payload: events });
      dispatch(asyncActionFisnish());
    } catch (error) {
      dispatch(asyncActionError(error));
    }
  };
};

// into EventForm component
export const createEvent = (event) => {
  return {
    type: CREATE_EVENT,
    payload: event,
  };
};

// into EventForm component
export const updateEvent = (event) => {
  return {
    type: UPDATE_EVENT,
    payload: event,
  };
};

// into EventListItem component
export const deleteEvent = (eventiD) => {
  return {
    type: DELETE_EVENT,
    payload: eventiD,
  };
};
