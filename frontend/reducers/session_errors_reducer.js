import {RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_actions';

import {merge} from "lodash";

export default (state=[], action) => {
  Object.freeze(state);
  console.log(action);
  switch(action.type){
    
    case RECEIVE_CURRENT_USER: 
      return merge({}, {errors: null});
    case RECEIVE_SESSION_ERRORS:
      return merge({}, {errors: action.errors});

    default:
      return state;
  }
};