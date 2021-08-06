import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from './EventsConstants';

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
