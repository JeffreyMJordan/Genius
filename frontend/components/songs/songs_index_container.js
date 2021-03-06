import SongsIndex from './songs_index';
import {connect} from "react-redux";
import {values} from "lodash";
import {fetchSong, deleteSong, fetchSongs} from "../../actions/song_actions";
import {fetchAlbums} from "../../actions/album_actions";
import {fetchArtists} from "../../actions/artist_actions";
import {fetchPayloads} from "../../actions/payload_actions";

const mapStateToProps = (state) => {
  
  return {
    songs: values(state.songs),
    albums: state.albums,
    artists: state.artists
    // song_album_image_urls: ,
    // Give it access to full albums and artists 
    //Just limit how many songs, albums, etc. can be in the state at a time
    //Create custom route, something like top songs index
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    
    fetchPayloads: (limit) => dispatch(fetchPayloads(limit))
    //Also need to dispatch fetchAlbums and fetchArtists
    //Control amount of songs/albums etc. in backend 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongsIndex);