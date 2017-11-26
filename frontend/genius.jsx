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
import {createReferent, fetchReferent} from './util/referent_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store = undefined;

  if(window.currentUser){
    const preloadedState = {session: {currentUser: window.currentUser} };
    store = configureStore(preloadedState);
  }else{
    store = configureStore();
  }
  
  window.fetchPayloads = fetchPayloads;

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.createReferent = createReferent;
  window.fetchReferent = fetchReferent;
  window.fetchPayloadBySongID = fetchPayloadBySongID;

  ReactDOM.render(<Root store={store}/>, root);
});