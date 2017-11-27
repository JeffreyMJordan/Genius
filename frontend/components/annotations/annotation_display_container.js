import AnnotationDisplay from './annotation_display';
import {connect} from "react-redux";
import {fetchAnnotation, fetchAnnotationsByReferent} from "../../actions/annotation_actions";
import {withRouter }from "react-router-dom";

const findReferent = (refs, refId) => {
  for(var i = 0; i<refs.length; i++){
    let ref = refs[i];
    if (ref.id === parseInt(refId)){
      return ref;
    }
  }
  return undefined;
};

const mapStateToProps = (state, ownProps) => {
  let refId = ownProps.match.params.refId;
  let songId = ownProps.match.params.songId;
  let song = undefined;
  let ref = undefined;
  let fragment = undefined;

  if (state.songs[songId]){
    song = state.songs[songId];
    ref = findReferent(state.referents[songId], refId);
    fragment = song.lyrics.slice(ref.start_idx, ref.end_idx);
  }
  
  return {
    refId,
    annotations: state.annotations[refId],
    songId,
    fragment
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAnnotation: (id) => dispatch(fetchAnnotation(id)),
    fetchAnnotationsByReferent: (refId) => dispatch(fetchAnnotationsByReferent(refId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AnnotationDisplay));