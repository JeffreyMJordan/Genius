import * as SessionAPIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const REMOVE_SESSION_ERRORS = "REMOVE_SESSION_ERRORS";

export const receiveCurrentUser = (currentUser) => {
  return {type: RECEIVE_CURRENT_USER,
  currentUser};
};

export const receiveSessionErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const removeErrors = () => {
  return {
    type: REMOVE_SESSION_ERRORS
  };
};

export const signup = (user) => (dispatch) => {
  return SessionAPIUtil.signup(user)
    .then((returnedUser) => dispatch(receiveCurrentUser(returnedUser)),
    (errors) => dispatch(receiveSessionErrors(errors.responseJSON)));
};

export const login = (user) => (dispatch) => {
  return SessionAPIUtil.login(user)
    .then((returnedUser) => dispatch(receiveCurrentUser(returnedUser)),
    (errors) => dispatch(receiveSessionErrors(errors.responseJSON)));
};

export const logout = () => (dispatch) => {
  return SessionAPIUtil.logout()
    .then(() => dispatch(receiveCurrentUser({id: null, username: null})),
    (errors) => dispatch(receiveSessionErrors(errors.responseJSON)));
};

