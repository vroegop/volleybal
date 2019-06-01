import {
  UPDATE_PAGE,
  UPDATE_OFFLINE,
  OPEN_SNACKBAR,
  CLOSE_SNACKBAR,
  UPDATE_DRAWER_STATE,
  UPDATE_EMAIL,
  SNACKBAR_MESSAGE,
  LOGGED_IN,
  LOGGED_OUT,
} from '../actions/app.js';

const INITIAL_STATE = {
  page: '',
  offline: false,
  drawerOpened: false,
  snackbarOpened: false,
  snackbarMessage: 'You are now online.',
  email: '',
  logedIn: false,
};

const app = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_PAGE:
      return {
        ...state,
        page: action.page
      };
    case UPDATE_OFFLINE:
      return {
        ...state,
        offline: action.offline
      };
    case UPDATE_DRAWER_STATE:
      return {
        ...state,
        drawerOpened: action.opened
      };
    case OPEN_SNACKBAR:
      return {
        ...state,
        snackbarOpened: true
      };
    case CLOSE_SNACKBAR:
      return {
        ...state,
        snackbarOpened: false
      };
    case UPDATE_EMAIL:
      return {
        ...state,
        email: action.email
      };
    case SNACKBAR_MESSAGE:
      return {
        ...state,
        snackbarMessage: action.snackbarMessage
      };
    case LOGGED_IN:
      return {
        ...state,
        loggedIn: true
      };
    case LOGGED_OUT:
      return {
        ...state,
        loggedIn: false,
        email: ''
      };
    default:
      return state;
  }
};

export default app;
