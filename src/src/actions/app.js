export const UPDATE_PAGE = 'UPDATE_PAGE';
export const UPDATE_OFFLINE = 'UPDATE_OFFLINE';
export const UPDATE_DRAWER_STATE = 'UPDATE_DRAWER_STATE';
export const OPEN_SNACKBAR = 'OPEN_SNACKBAR';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';
export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const SNACKBAR_MESSAGE = 'SNACKBAR_MESSAGE';
export const LOGGED_IN = 'LOGGED_IN';
export const LOGGED_OUT = 'LOGGED_OUT';

let snackbarTimer;
const SNACKBAR_TIME = 3000;

export const navigate = (path) => (dispatch) => {
  // Extract the page name from path.
  const page = path === '/' ? 'login' : path.slice(1);

  // Any other info you might want to extract from the path (like page type),
  // you can do here
  dispatch(loadPage(page));

  // Close the drawer - in case the *path* change came from a link in the drawer.
  dispatch(updateDrawerState(false));
};

const loadPage = (page) => (dispatch) => {
  switch(page) {
    case 'login':
      import('../components/pages/beach-login.js')
      //.then((module) => {
        // Put code in here that you want to run every time when
        // navigation is loaded.
      //});
      break;
    case 'home':
      import('../components/pages/beach-home.js');
      break;
    default:
      page = 'view404';
      import('../components/pages/my-view404.js');
  }

  dispatch(updatePage(page));
};

const updatePage = (page) => {
  return {
    type: UPDATE_PAGE,
    page
  };
};

export const showSnackbar = () => (dispatch) => {
  dispatch({
    type: OPEN_SNACKBAR
  });
  window.clearTimeout(snackbarTimer);
  snackbarTimer = window.setTimeout(() =>
    dispatch({ type: CLOSE_SNACKBAR }), SNACKBAR_TIME);
};

export const updateOffline = (offline) => (dispatch, getState) => {
  // Show the snackbar only if offline status changes.
  if (offline !== getState().app.offline) {
    dispatch(updateSnackbarMessage(`You are now ${offline ? 'offline' : 'online'}.`));
  }
  dispatch({
    type: UPDATE_OFFLINE,
    offline
  });
};

export const oops = (message) => (dispatch) => {
  dispatch(updateSnackbarMessage(message));
};

export const updateSnackbarMessage = (snackbarMessage) => (dispatch) => {
  dispatch({
    type: SNACKBAR_MESSAGE,
    snackbarMessage
  });
  dispatch(showSnackbar());
}

export const updateDrawerState = (opened) => {
  return {
    type: UPDATE_DRAWER_STATE,
    opened
  };
};

export const updateEmail = (email) => {
  return {
    type: UPDATE_EMAIL,
    email
  };
};

export const loggedIn = () => (dispatch, getState) => {
  dispatch(updateSnackbarMessage(`Je bent ingelogd als ${getState().app.email}.`));
  dispatch({
    type: LOGGED_IN
  });
};

export const loggedOut = () => {
  dispatch(updateSnackbarMessage('Je bent uitgelogd.'));
  dispatch({
    type: LOGGED_OUT
  });
};
