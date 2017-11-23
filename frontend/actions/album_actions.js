import * as AlbumAPIUtil from "../util/album_api_util";

export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_ALBUM_ERRORS = "RECEIVE_ALBUM_ERRORS";


export const receiveAlbum = (album) => {
  return {
    type: RECEIVE_ALBUM,
    album
  };
};

export const receiveAlbums = (albums) => {
  return {
    type: RECEIVE_ALBUMS,
    albums
  };
};

export const receiveAlbumErrors = (errors) => {
  return {
    type: RECEIVE_ALBUM_ERRORS,
    errors
  };
};


export const fetchAlbums = () => (dispatch) => {
  return AlbumAPIUtil.fetchAlbums()
    .then((albums) => dispatch(receiveAlbums(albums)),
    (errors) => dispatch(receiveAlbumErrors(errors.responseJSON)));
};

export const fetchAlbum = (id) => (dispatch) => {
  return AlbumAPIUtil.fetchAlbum(id)
    .then((album) => dispatch(receiveAlbum(album)),
    (errors) => dispatch(receiveAlbumErrors(errors.responseJSON)));
};

export const createAlbum = (album) => (dispatch) => {
  return AlbumAPIUtil.createAlbum(album)
    .then((createdAlbum) => dispatch(receiveAlbum(createdAlbum)),
    (errors) => dispatch(receiveAlbumErrors(errors.responseJSON)));
};

