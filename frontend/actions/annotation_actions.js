import * as AnnotationAPIUtil from '../util/annotation_api_util';

export const RECEIVE_ANNOTATION = "RECEIVE_ANNOTATION";
export const RECEIVE_ANNOTATIONS = "RECEIVE_ANNOTAIONS";
export const REMOVE_ANNOTATION = "REMOVE_ANNOTATION";

export const receiveAnnotation = (annotation) => {
  return {
    type: RECEIVE_ANNOTATION,
    annotation
  };
};

export const receiveAnnotations = (annotations, refId) => {
  return {
    type: RECEIVE_ANNOTATIONS,
    annotations,
    refId
  };
};

export const removeAnnotation = (annotation) => {
  return {
    type: REMOVE_ANNOTATION,
    annotation
  };
};

export const createAnnotation = (ann) => (dispatch) => {
  return AnnotationAPIUtil.createAnnotation(ann)
    .then((annotation) => dispatch(receiveAnnotation(annotation)));
};

export const fetchAnnotation = (id) => (dispatch) => {
  return AnnotationAPIUtil.fetchAnnotation(id)
    .then((annotation) => dispatch(receiveAnnotation(annotation)));
};

export const fetchAnnotationsByReferent = (id) => (dispatch) => {
  return AnnotationAPIUtil.fetchAnnotationsByReferent(id)
    .then((anns) => dispatch(receiveAnnotations(anns, id)));
};

export const deleteAnnotation = (id) => (dispatch) => {
  return AnnotationAPIUtil.deleteAnnotation(id)
    .then((ann) => dispatch(removeAnnotation(ann)));
};

