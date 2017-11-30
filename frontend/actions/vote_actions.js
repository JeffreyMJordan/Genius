import * as VoteAPIUtil from '../util/vote_api_util';

export const RECEIVE_VOTE = "RECEIVE_VOTE";
export const RECEIVE_VOTES = "RECEIVE_VOTES";

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

export const createVote = (vote) => (dispatch) => {
  return VoteAPIUtil.createVote(vote)
    .then((vote1) => dispatch(receiveVote(vote1)));
};

export const fetchVotesByAnnotation = (id) => (dispatch) => {
  return VoteAPIUtil.fetchVotesByAnnotation(id)
    .then((votes) => dispatch(receiveVotes(votes, id)));
};