export const ADD_MESSAGE = 'ADD_MESSAGE';
export const UPDATE_USER = 'UPDATE_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

// Action creators
export const addMessage = (sender, content, timestamp) => ({
  type: ADD_MESSAGE,
  payload: { sender, content, timestamp },
});

export const updateUser = (username, isLoggedIn) => ({
  type: UPDATE_USER,
  payload: { username, isLoggedIn },
});

export const loginUser = () => ({
    type: LOGIN_USER,
  });

  export const logoutUser = () => ({
    type: LOGOUT_USER,
  });
  