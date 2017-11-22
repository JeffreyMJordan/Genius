import * as SongAPIUtil from "../util/song_api_util";

export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";

export const fetchSongs = () => (dispatch) => {
  return SongAPIUtil.fetchSongs()
    .then((res) => console.log(res));
};

export const fetchSong = (id) => (dispatch) => {
  return SongAPIUtil.fetchSong(id)
    .then((res) => console.log(res));
};

export const deleteSong = (id) => (dispatch) => {
  return SongAPIUtil.deleteSong(id)
    .then((res) => console.log(res));
};

export const createSong = (song) => (dispatch) => {
  return SongAPIUtil.createSong(song)
    .then((res) => console.log(res));
};

