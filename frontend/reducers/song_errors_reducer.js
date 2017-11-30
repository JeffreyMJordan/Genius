import {RECEIVE_SONG, REMOVE_SONG_ERRORS, RECEIVE_SONGS, REMOVE_SONG, RECEIVE_SONG_ERRORS} from "../actions/song_actions";
import {merge} from "lodash";

export default (state=[], action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SONG_ERRORS:
      return action.errors;

    case RECEIVE_SONG:
      return [];

    case RECEIVE_SONGS:
      return [];
      
    case REMOVE_SONG:
      return [];

    case REMOVE_SONG_ERRORS:
      return [];
    
    default: 
      return state;
  }
};