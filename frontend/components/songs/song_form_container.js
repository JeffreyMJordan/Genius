import {connect} from "react-redux";
import {createSong, removeSongErrors} from "../../actions/song_actions";
import SongForm from "./song_form";


const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors.songs
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createSong: (song) => dispatch(createSong(song)),
    removeErrors: () => dispatch(removeSongErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongForm);