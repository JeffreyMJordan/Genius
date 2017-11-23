import {merge} from "lodash";
import {RECEIVE_ARTIST, RECEIVE_ARTISTS, REMOVE_ARTIST} from "../actions/artist_actions";
import {RECEIVE_PAYLOADS} from "../actions/payload_actions";

export default (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ARTISTS:
      return merge({}, action.artists);
    case RECEIVE_ARTIST:
      let newState = merge({}, state);
      newState[action.artist.id] = action.artist;
      return newState;
    case REMOVE_ARTIST: 
      let newState1 = merge({}, state);
      newState1[action.artistId] = undefined;
      return newState1;

    case RECEIVE_PAYLOADS:
      let artists = merge({}, state);
      action.payloads.forEach((payload) => {
        artists[payload.artist.id] = payload.artist;
      });
      return merge({}, artists);
    
    default: 
      return state;
  }
};