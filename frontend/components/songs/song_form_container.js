import {connect} from "react-redux";
import {createSong} from "../../actions/song_actions";
import SongForm from "./song_form";

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createSong: (song) => dispatch(createSong(song))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongForm);