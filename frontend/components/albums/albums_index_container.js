import AlbumsIndex from './albums_index';
import {connect} from 'react-redux';
import {fetchAlbums} from '../../actions/album_actions';
import {values} from "lodash";

const mapStateToProps = (state) => {
  return {
    albums: values(state.albums)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAlbums: () => dispatch(fetchAlbums())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsIndex)