import {merge} from "lodash";
import {RECEIVE_COMMENT, RECEIVE_COMMENTS, REMOVE_COMMENT, receiveComments} from '../actions/comment_actions';


//Comments should be mapped to their annotation id
export default (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_COMMENT:
      let receiveCommentState = merge({}, state);
      if(receiveCommentState[action.comment.annotation_id]){
        receiveCommentState[action.comment.annotation_id].push(action.comment);
      }else{
        receiveCommentState[action.comment.annotation_id] = [action.comment];
      } 
      return receiveCommentState;
    case RECEIVE_COMMENTS: 
      let receiveCommentsState = merge({}, state);
      if (action.comments[0]){
        receiveCommentsState[action.comments[0].annotation_id] = action.comments;
      }else{
        receiveCommentsState[action.annId] = [];
      }
      return receiveCommentsState;
    case REMOVE_COMMENT:
      let removeState = merge({}, state);
      removeState[action.comment.annotation_id] = removeState[action.comment.annotation_id].filter((c) => c.id!=action.comment.id);
      return removeState;
    default: 
      return state;
  }
};