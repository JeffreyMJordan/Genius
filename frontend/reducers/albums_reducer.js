import {merge} from "lodash";
import {RECEIVE_ALBUM, RECEIVE_ALBUMS, REMOVE_ALBUM} from "../actions/album_actions";
import {RECEIVE_PAYLOADS, RECEIVE_PAYLOAD} from "../actions/payload_actions";

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

    case RECEIVE_PAYLOADS:
      let albums = merge({}, state);
      action.payloads.forEach((payload) => {
        albums[payload.album.id] = payload.album;
      });
      return merge({}, albums);
    
    case RECEIVE_PAYLOAD:
      let newState2 = merge({}, state);
      let payload = action.payload;
      newState2[payload.album.id] = payload.album;
      return newState2;
      
    default: 
      return state;
  }
};