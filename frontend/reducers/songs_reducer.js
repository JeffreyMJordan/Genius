import {merge} from "lodash";
import {RECEIVE_SONG, RECEIVE_SONGS, REMOVE_SONG} from "../actions/song_actions";
import {RECEIVE_PAYLOADS, RECEIVE_PAYLOAD} from "../actions/payload_actions";


export default (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SONGS:
      return merge({}, action.songs);
    case RECEIVE_SONG:
      let newState = merge({}, state);
      newState[action.song.id] = action.song;
      return newState;
    case REMOVE_SONG: 
      let newState1 = merge({}, state);
      delete newState1[action.songId];
      return newState1;
    case RECEIVE_PAYLOADS:
      let songs = merge({}, state);
      action.payloads.forEach((payload) => {
        songs[payload.song.id] = payload.song;
      });
      return merge({}, songs);
    
    case RECEIVE_PAYLOAD:
      let newState2 = merge({}, state);
      let payload = action.payload;
      newState2[payload.song.id] = payload.song;
      return newState2;

    default: 
      return state;
  }
};