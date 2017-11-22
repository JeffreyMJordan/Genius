import {merge} from "lodash";
import {RECEIVE_SONG, RECEIVE_SONGS, REMOVE_SONG} from "../actions/song_actions";

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
      newState1[action.songId] = undefined;
      return newState1;
    default: 
      return state;
  }
};