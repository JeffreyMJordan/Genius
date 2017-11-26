import {connect} from "react-redux";
import ReferentForm from "./referent_form";
import {createReferent} from "../../actions/referent_actions";

const mapStateToProps = (state, ownProps) => {
  let song = state.songs[ownProps.match.params.songId];
  let referents = state.referents[song.id];
  return {
    song,
    referents,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createReferent: (ref) => dispatch(createReferent(ref))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReferentForm);