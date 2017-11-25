import {merge} from "lodash";
import {RECEIVE_PAYLOAD} from "../actions/payload_actions";

export default (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_PAYLOAD:
      let referents = merge({}, state);
      action.payload.referents.forEach((ref) => {
        referents[ref.id] = ref;
      });
      return referents;
    default: 
      return state;
  }
};