import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionAPIUtil from './util/session_api_util';
import configureStore from './store/store';
import {login, logout, signup} from './actions/session_actions';
import {fetchSong, fetchSongs, deleteSong, createSong} from './actions/song_actions';
import {fetchArtist, fetchArtists, createArtist} from './actions/artist_actions';
import {fetchAlbum, fetchAlbums, createAlbum} from './actions/album_actions';
import Root from './components/root';
import {fetchPayloads} from './actions/payload_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store = undefined;

  if(window.currentUser){
    const preloadedState = {session: {currentUser: window.currentUser} };
    store = configureStore(preloadedState);
  }else{
    store = configureStore();
  }
  window.fetchSong = fetchSong;
  window.fetchSongs = fetchSongs;
  window.deleteSong = deleteSong;
  window.createSong = createSong;

  window.fetchArtist = fetchArtist;
  window.fetchAlbum = fetchAlbum;
  window.fetchArtists = fetchArtists;
  window.fetchAlbums = fetchAlbums;
  window.createArtist = createArtist;
  window.createAlbum = createAlbum;

  window.fetchPayloads = fetchPayloads;

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<Root store={store}/>, root);
});