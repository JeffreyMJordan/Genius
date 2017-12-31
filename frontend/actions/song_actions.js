import * as SongAPIUtil from "../util/song_api_util";

export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";
export const REMOVE_SONG = "REMOVE_SONG";
export const RECEIVE_SONG_ERRORS = "RECEIVE_SONG_ERRORS";
export const REMOVE_SONG_ERRORS = "REMOVE_SONG_ERRORS";


export const receiveSong = (song) => {
  return {
    type: RECEIVE_SONG,
    song
  };
};

export const receiveSongs = (songs) => {
  return {
    type: RECEIVE_SONGS,
    songs
  };
};

export const removeSong = (songId) => {
  return {
    type: REMOVE_SONG,
    songId
  };
};

export const receiveSongErrors = (errors) => {
  return {
    type: RECEIVE_SONG_ERRORS,
    errors
  };
};

export const removeSongErrors = () => {
  return {
    type: REMOVE_SONG_ERRORS
  };
};





export const fetchSongs = () => (dispatch) => {
  return SongAPIUtil.fetchSongs()
    .then((songs) => dispatch(receiveSongs(songs)),
    (errors) => dispatch(receiveSongErrors(errors.responseJSON)));
};

export const fetchSongsByAlbumId = (id) => (dispatch) => {
  return SongAPIUtil.fetchSongsByAlbumId(id)
    .then((songs) => dispatch(receiveSongs(songs)));
};

export const fetchSong = (id) => (dispatch) => {
  return SongAPIUtil.fetchSong(id)
    .then((song) => dispatch(receiveSong(song)),
    (errors) => dispatch(receiveSongErrors(errors.responseJSON)));
};

export const deleteSong = (id) => (dispatch) => {
  return SongAPIUtil.deleteSong(id)
    .then((song) => dispatch(removeSong(song.id)),
    (errors) => dispatch(receiveSongErrors(errors.responseJSON)));
};

export const createSong = (song) => (dispatch) => {
  return SongAPIUtil.createSong(song)
    .then((createdSong) => dispatch(receiveSong(createdSong)),
    (errors) => dispatch(receiveSongErrors(errors.responseJSON)));
};

