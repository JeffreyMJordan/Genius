import * as ReferentAPIUtil from "../util/referent_api_util";

export const RECEIVE_REFERENT = "RECEIVE_REFERENT";
export const REMOVE_REFERENT = "REMOVE_REFERENT";

export const receiveReferent = (ref) => {
  return {
    type: RECEIVE_REFERENT,
    ref
  };
};

export const removeReferent = (ref) => {
  debugger;
  return {
    type: REMOVE_REFERENT,
    ref
  };
};

export const fetchReferent = (id) => (dispatch) => {
  return ReferentAPIUtil.fetchReferent(id)
    .then((ref) => dispatch(receiveReferent(ref)));
};

export const createReferent = (referent) => (dispatch) => {
  return ReferentAPIUtil.createReferent(referent)
    .then((ref) => dispatch(receiveReferent(ref)));
};

export const deleteReferent = (id) => (dispatch) => {
  return ReferentAPIUtil.deleteReferent(id)
    .then((ref) => dispatch(removeReferent(ref)));
};