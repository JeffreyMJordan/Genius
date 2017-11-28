import {merge} from "lodash";
import {RECEIVE_ANNOTATION, RECEIVE_ANNOTATIONS, REMOVE_ANNOTATION} from '../actions/annotation_actions';


//In the state, we map referent_ids to annotation arrays
export default (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ANNOTATION:
      let newState = merge({}, state);
      if (newState[action.annotation.referent_id]){
        newState[action.annotation.referent_id].push(action.annotation);
      }else{
        newState[action.annotation.referent_id] = [action.annotation];
      }
      return newState;
    case RECEIVE_ANNOTATIONS:
      let newState2 = merge({}, state);
      if(action.annotations[0]){
        newState2[action.annotations[0].referent_id] = action.annotations;
      }else{
        newState2[action.refId] = [];
      }
      return newState2;
    case REMOVE_ANNOTATION:
      let removeState = merge({}, state);
      removeState[action.annotation.referent_id] = [];
      return removeState;
    default: 
      return state;
  }
};