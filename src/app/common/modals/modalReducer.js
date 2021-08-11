const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

// into Sandbox
export const openModal = (payload) => {
  return {
    type: OPEN_MODAL,
    payload: payload,
  };
};

// into
export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};

const intialState = null;

const modalReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case OPEN_MODAL:
      const { modalType, modalProps } = payload;
      return {
        modalType,
        modalProps,
      };

    case CLOSE_MODAL:
      return null;

    default:
      return state;
  }
};

// into
export default modalReducer;
