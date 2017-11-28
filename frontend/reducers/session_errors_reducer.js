import {RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_actions';

import {merge} from "lodash";

export default (state=[], action) => {
  Object.freeze(state);
  switch(action.type){
    
    case RECEIVE_CURRENT_USER: 
      return [];
    case RECEIVE_SESSION_ERRORS:
      return action.errors;

    default:
      return [];
  }
};