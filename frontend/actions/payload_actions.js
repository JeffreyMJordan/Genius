import * as PayloadAPIUtil from '../util/payload_api_util';

import {receiveSong} from './song_actions';
import {receiveAlbum} from './album_actions';
import {receiveArtist} from './artist_actions';


export const fetchPayloads = (limit) => (dispatch) => {
  return PayloadAPIUtil.fetchPayloads(limit)
    .then((payloads) => {
      payloads.forEach((payload) => {
        dispatch(receiveAlbum(payload.album));
        dispatch(receiveSong(payload.song));
        dispatch(receiveArtist(payload.artist));
      });
    });
};