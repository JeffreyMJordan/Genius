import {merge} from "lodash";
import {RECEIVE_PAYLOAD} from "../actions/payload_actions";

export default (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
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