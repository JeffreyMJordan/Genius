import {merge} from "lodash";
import {RECEIVE_PAYLOAD} from "../actions/payload_actions";
import {RECEIVE_REFERENT, REMOVE_REFERENT} from "../actions/referent_actions";


//In the state, referent arrays are mapped to song ids
export default (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_REFERENT:
      let newState2 = merge({}, state);
      newState2[action.ref.song_id].push(action.ref);
      return newState2;
    case REMOVE_REFERENT:
      debugger;
      let removeState = merge({}, state);
      removeState[action.ref.song_id] = [];
      return removeState;
    case RECEIVE_PAYLOAD:
      let newState = merge({}, state);
      if(action.payload.referents[0]){
        newState[action.payload.referents[0].song_id] = action.payload.referents;
        return newState;
      }else{
        newState[action.payload.song.id] = [];
        return newState;
      }
    default: 
      return state;
  }
};