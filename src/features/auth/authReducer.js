const { SIGN_IN_USER, SIGN_OUT_USER } = require('./authConstants');

const initialState = {
  authenticated: true,
  currentUser: {
    email: 'nabil@gmail.com',
    photoUrl: '/assets/user.png',
  },
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_IN_USER:
      return {
        ...state,
        authenticated: true,
        currentUser: {
          email: payload.email,
          photoUrl: '/assets/user.png',
        },
      };

    case SIGN_OUT_USER: {
      return {
        ...state,
        authenticated: false,
        currentUser: null,
      };
    }

    default:
      return state;
  }
};

// into root Reducer
export default authReducer;
