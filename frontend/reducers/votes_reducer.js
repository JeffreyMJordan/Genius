import {merge} from "lodash";
import {RECEIVE_VOTES, RECEIVE_VOTE, RECEIVE_UPDATED_VOTE} from '../actions/vote_actions';


//Votes are mapped to annotation ids in the state
export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){

    case RECEIVE_VOTES:
      let votesState = merge({}, state);
      votesState[action.annId] = action.votesPayload;
      return votesState;
        
    case RECEIVE_VOTE: 
      let voteState = merge({}, state);
      voteState[action.vote.annotation_id].votes.push(action.vote);
      if(action.vote.vote_type==="up"){
        voteState[action.vote.annotation_id].total = voteState[action.vote.annotation_id].total +1;
      }else{
        voteState[action.vote.annotation_id].total = voteState[action.vote.annotation_id].total - 1;
      }
      
      return voteState;

    case RECEIVE_UPDATED_VOTE:
      let updateState = merge({}, state);
      updateState[action.vote.annotation_id].votes.push(action.vote);
      if(action.vote.vote_type==="up"){
        updateState[action.vote.annotation_id].total = updateState[action.vote.annotation_id].total +2;
      }else{
        updateState[action.vote.annotation_id].total = updateState[action.vote.annotation_id].total - 2;
      }
      return updateState;
    default:
      return state;
  }
};