import {merge} from "lodash";
import {RECEIVE_ALBUM, RECEIVE_ALBUMS, REMOVE_ALBUM} from "../actions/album_actions";

export default (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ALBUMS:
      return merge({}, action.albums);
    case RECEIVE_ALBUM:
      let newState = merge({}, state);
      newState[action.album.id] = action.album;
      return newState;
    case REMOVE_ALBUM: 
      let newState1 = merge({}, state);
      newState1[action.albumId] = undefined;
      return newState1;
    default: 
      return state;
  }
};