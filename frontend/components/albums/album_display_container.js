import {connect} from 'react-redux';
import {fetchAlbum} from '../../actions/album_actions';
import AlbumDisplay from './album_display';
import {withRouter} from 'react-router-dom';
import {values} from 'lodash';


const getSongs = (albumId, songs) => {
  let res = [];
  values(songs).forEach((song) => {
    if(song.album_id ===albumId){
      res.push(song);
    }
  });
  return res;
};

const mapStateToProps = (state, ownProps) => {
  let albumId = ownProps.match.params.albumId;
  let album = state.albums[albumId];
  let songs = getSongs(albumId, state.songs);
  return {
    albumId: albumId,
    album: album,
    songs: songs
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAlbum: (id) => dispatch(fetchAlbum(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AlbumDisplay));