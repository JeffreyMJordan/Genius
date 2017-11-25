import {merge} from "lodash";
import {RECEIVE_PAYLOAD} from "../actions/payload_actions";

export default (state=[], action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_PAYLOAD:
      return action.payload.referents;
    default: 
      return state;
  }
};