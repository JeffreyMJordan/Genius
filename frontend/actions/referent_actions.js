import * as ReferentAPIUtil from "../util/referent_api_util";

export const RECEIVE_REFERENT = "RECEIVE_REFERENT";

export const receiveReferent = (ref) => {
  return {
    type: RECEIVE_REFERENT,
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