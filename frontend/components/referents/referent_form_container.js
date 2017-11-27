import {connect} from "react-redux";
import ReferentForm from "./referent_form";
import {createReferent} from "../../actions/referent_actions";
import {withRouter} from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  let song = state.songs[ownProps.match.params.songId];
  let fragment = song.lyrics.slice(ownProps.match.params.startIdx, ownProps.match.params.endIdx);
  let referents = state.referents[song.id];
  return {
    song,
    referents,
    currentUser: state.session.currentUser,
    fragment
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createReferent: (ref) => dispatch(createReferent(ref))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReferentForm));