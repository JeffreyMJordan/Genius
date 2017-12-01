import * as VoteAPIUtil from '../util/vote_api_util';

export const RECEIVE_VOTE = "RECEIVE_VOTE";
export const RECEIVE_VOTES = "RECEIVE_VOTES";
export const RECEIVE_UPDATED_VOTE = "RECEIVE_UPDATED_VOTE";
export const REMOVE_VOTE = "REMOVE_VOTE";

export const receiveVote = (vote) => {
  return {
    type: RECEIVE_VOTE,
    vote
  };
};

export const receiveVotes = (votesPayload, annId) => {
  return {
    type: RECEIVE_VOTES,
    votesPayload, 
    annId
  };
};

export const receiveUpdatedVote = (vote) => {
  return {
    type: RECEIVE_UPDATED_VOTE,
    vote
  };
};

export const removeVote = (vote) => {
  return {
    type: REMOVE_VOTE,
    vote
  };
};

export const createVote = (vote) => (dispatch) => {
  return VoteAPIUtil.createVote(vote)
    .then((vote1) => dispatch(receiveVote(vote1)));
};

export const fetchVotesByAnnotation = (id) => (dispatch) => {
  return VoteAPIUtil.fetchVotesByAnnotation(id)
    .then((votes) => dispatch(receiveVotes(votes, id)));
};

export const updateVote = (id) => (dispatch) => {
  return VoteAPIUtil.updateVote(id)
    .then((vote) => dispatch(receiveUpdatedVote(vote)));
};

export const deleteVote = (id) => (dispatch) => {
  return VoteAPIUtil.deleteVote(id)
    .then((vote) => dispatch(removeVote(vote)));
};