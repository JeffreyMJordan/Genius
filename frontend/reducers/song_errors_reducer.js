import {RECEIVE_SONG, RECEIVE_SONGS, REMOVE_SONG, RECEIVE_SONG_ERRORS} from "../actions/song_actions";
import {merge} from "lodash";

export default (state=[], action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SONG_ERRORS:
      return merge({}, {errors: action.errors});

    case RECEIVE_SONG:
      return merge({}, {errors: null});

    case RECEIVE_SONGS:
      return merge({}, {errors: null});
      
    case REMOVE_SONG:
      return merge({}, {errors: null});
    
    default: 
      return state;
  }
};