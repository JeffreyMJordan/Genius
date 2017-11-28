import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const REMOVE_COMMENT = "REMOVE_COMMENT";


export const receiveComment = (comment) => {
  return {
    type: RECEIVE_COMMENT,
    comment
  };
};

export const receiveComments = (comments, annId) => {
  return {
    type: RECEIVE_COMMENTS,
    comments,
    annId
  };
};

export const removeComment = (comment) => {
  return {
    type: REMOVE_COMMENT,
    comment
  };
};


export const createComment = (comment) => (dispatch) => {
  return CommentAPIUtil.createComment(comment)
    .then((comment1) => dispatch(receiveComment(comment1)));
};

export const fetchComment = (id) => (dispatch) => {
  return CommentAPIUtil.fetchComment(id)
    .then((comment) => dispatch(receiveComment(comment)));
};

export const deleteComment = (id) => (dispatch) => {
  return CommentAPIUtil.deleteComment(id)
    .then((comment) => dispatch(removeComment(comment)));
};

export const fetchCommentsByAnnotation = (id) => (dispatch) => {
  return CommentAPIUtil.fetchCommentsByAnnotation(id)
    .then((comments) => dispatch(receiveComments(comments, id)));
};