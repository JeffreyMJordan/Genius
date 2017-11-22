import * as SongAPIUtil from "../util/song_api_util";

export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";
export const REMOVE_SONG = "REMOVE_SONG";

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



export const fetchSongs = () => (dispatch) => {
  return SongAPIUtil.fetchSongs()
    .then((songs) => dispatch(receiveSongs(songs)));
};

export const fetchSong = (id) => (dispatch) => {
  return SongAPIUtil.fetchSong(id)
    .then((song) => dispatch(receiveSong(song)));
};

export const deleteSong = (id) => (dispatch) => {
  return SongAPIUtil.deleteSong(id)
    .then((song) => dispatch(removeSong(song.id)));
};

export const createSong = (song) => (dispatch) => {
  return SongAPIUtil.createSong(song)
    .then((createdSong) => dispatch(receiveSong(createdSong)));
};

