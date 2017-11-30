import {merge} from "lodash";

import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_VOTE} from '../actions/vote_actions';

const _nullUser = {
  currentUser: {id: null, username: null, votes: {}}
};

export default (state=_nullUser, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      let newState = merge({}, {currentUser: action.currentUser});
      if (newState["currentUser"]["votes"]===undefined){
        newState["currentUser"]["votes"] = {};
      }
      return newState;

    case RECEIVE_VOTE:
      let voteState = merge({}, state);
      voteState["currentUser"]["votes"][action.vote.annotation_id] = action.vote.vote_type;
      return voteState;
    default: 
      return state;
  }
};