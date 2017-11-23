import * as ArtistAPIUtil from "../util/artist_api_util";

export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
export const RECEIVE_ARTIST_ERRORS = "RECEIVE_ARTIST_ERRORS";


export const receiveArtist = (artist) => {
  return {
    type: RECEIVE_ARTIST,
    artist
  };
};

export const receiveArtists = (artists) => {
  return {
    type: RECEIVE_ARTISTS,
    artists
  };
};

export const receiveArtistErrors = (errors) => {
  return {
    type: RECEIVE_ARTIST_ERRORS,
    errors
  };
};


export const fetchArtists = () => (dispatch) => {
  return ArtistAPIUtil.fetchArtists()
    .then((artists) => dispatch(receiveArtists(artists)),
    (errors) => dispatch(receiveArtistErrors(errors.responseJSON)));
};

export const fetchArtist = (id) => (dispatch) => {
  return ArtistAPIUtil.fetchArtist(id)
    .then((artist) => dispatch(receiveArtist(artist)),
    (errors) => dispatch(receiveArtistErrors(errors.responseJSON)));
};

export const createArtist = (artist) => (dispatch) => {
  return ArtistAPIUtil.createArtist(artist)
    .then((createdArtist) => dispatch(receiveArtist(createdArtist)),
    (errors) => dispatch(receiveArtistErrors(errors.responseJSON)));
};
