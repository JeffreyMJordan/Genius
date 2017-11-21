import * as SessionAPIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = (currentUser) => {
  return {type: RECEIVE_CURRENT_USER,
  currentUser};
};

export const signup = (user) => (dispatch) => {
  return SessionAPIUtil.signup(user)
    .then((returnedUser) => dispatch(receiveCurrentUser(returnedUser)));
};

export const login = (user) => (dispatch) => {
  return SessionAPIUtil.login(user)
    .then((returnedUser) => dispatch(receiveCurrentUser(returnedUser)));
};

export const loguot = () => (dispatch) => {
  return SessionAPIUtil.logout()
    .then(() => dispatch(receiveCurrentUser(null)));
};

