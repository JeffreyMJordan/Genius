import React from "react";
import CommentDisplay from './comment_display';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {createComment, deleteComment, fetchComment, fetchCommentsByAnnotation} from '../../actions/comment_actions';

const findAnnotation = (state, ownProps) => {
  let songId = ownProps.match.params.songId;
  let refId = ownProps.match.params.refId;
  for(var i = 0; i<state.annotations[refId].length; i++){
    if (state.annotations[refId][i].id === parseInt(ownProps.match.params.annId)){
      return state.annotations[refId][i];
    }
  }
  return undefined;
};

const mapStateToProps = (state, ownProps) => {
  let annotation = findAnnotation(state, ownProps);
  return {
    annotation_id: ownProps.match.params.annId,
    comments: state.comments[ownProps.match.params.annId],
    annotation: annotation,
    songId: ownProps.match.params.songId,
    refId: ownProps.match.params.refId
  };
}; 

const mapDispatchToProps = (dispatch) => {
  return {
    createComment: (comment) => dispatch(createComment(comment)),
    fetchCommentsByAnnotation: (id) => dispatch(fetchCommentsByAnnotation(id)),
    deleteComment: (id) => dispatch(deleteComment(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentDisplay));