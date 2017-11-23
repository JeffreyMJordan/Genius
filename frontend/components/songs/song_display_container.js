import {connect} from "react-redux";
import {fetchSong, deleteSong} from "../../actions/song_actions";
import SongDisplay from './song_display';
import {withRouter} from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  let songId = ownProps.match.params.songId;
  let song = state.songs[songId];
  let album = state.albums[song.album_id];
  let artist = state.artists[song.artist_id];
  return {
    song: song,
    album: album,
    artist: artist
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let songId = ownProps.match.params.songId;
  return {
    fetchSong: (id) => dispatch(fetchSong(id)),
    deleteSong: (id) => dispatch(deleteSong(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SongDisplay));