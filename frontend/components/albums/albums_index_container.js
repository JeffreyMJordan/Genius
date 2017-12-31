import AlbumsIndex from './albums_index';
import {connect} from 'react-redux';
import {fetchAlbums} from '../../actions/album_actions';

const mapStateToProps = (state) => {
  return {
    albums: state.albums
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAlbums: () => dispatch(fetchAlbums())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsIndex)