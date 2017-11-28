import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionAPIUtil from './util/session_api_util';
import configureStore from './store/store';
import {login, logout, signup} from './actions/session_actions';
import {fetchSong, fetchSongs, deleteSong, createSong} from './actions/song_actions';
import {fetchArtist, fetchArtists, createArtist} from './actions/artist_actions';
import {fetchAlbum, fetchAlbums, createAlbum} from './actions/album_actions';
import Root from './components/root';
import {fetchPayloads, fetchPayloadBySongID} from './actions/payload_actions';
import {createReferent, fetchReferent, deleteReferent} from './actions/referent_actions';
import {createAnnotation, fetchAnnotation, fetchAnnotationsByReferent, deleteAnnotation} from './actions/annotation_actions';
import {createComment, fetchComment, fetchCommentsByAnnotation, deleteComment} from './actions/comment_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store = undefined;

  if(window.currentUser){
    const preloadedState = {session: {currentUser: window.currentUser} };
    store = configureStore(preloadedState);
  }else{
    store = configureStore();
  }
  
  window.createComment = createComment;
  window.fetchComment = fetchComment;
  window.fetchCommentsByAnnotation = fetchCommentsByAnnotation;
  window.deleteComment = deleteComment;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  

  ReactDOM.render(<Root store={store}/>, root);
});