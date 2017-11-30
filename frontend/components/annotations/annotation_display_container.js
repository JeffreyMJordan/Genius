import AnnotationDisplay from './annotation_display';
import {connect} from "react-redux";
import {fetchAnnotation, fetchAnnotationsByReferent, deleteAnnotation} from "../../actions/annotation_actions";
import {deleteReferent} from '../../actions/referent_actions';
import {withRouter} from "react-router-dom";
import {fetchVotesByAnnotation, createVote} from '../../actions/vote_actions';

const findReferent = (refs, refId) => {
  for(var i = 0; i<refs.length; i++){
    let ref = refs[i];
    if (ref.id === parseInt(refId)){
      return ref;
    }
  }
  return undefined;
};


//Just pass all the votes to the annotation_display
const mapStateToProps = (state, ownProps) => {
  let refId = ownProps.match.params.refId;
  let songId = ownProps.match.params.songId;
  let song = undefined;
  let ref = undefined;
  let fragment = undefined;
  let currentUser = state.session.currentUser;

  if (state.songs[songId]){
    song = state.songs[songId];
    ref = findReferent(state.referents[songId], refId);
    if (ref){
      fragment = song.lyrics.slice(ref.start_idx, ref.end_idx);
    }
  }
  
  return {
    refId,
    annotations: state.annotations[refId],
    songId,
    fragment, 
    currentUser,
    votes: state.votes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAnnotation: (id) => dispatch(fetchAnnotation(id)),
    fetchAnnotationsByReferent: (refId) => dispatch(fetchAnnotationsByReferent(refId)),
    deleteAnnotation: (id) => dispatch(deleteAnnotation(id)),
    deleteReferent: (id) => dispatch(deleteReferent(id)),
    fetchVotesByAnnotation: (id) => dispatch(fetchVotesByAnnotation(id)),
    createVote: (vote) => dispatch(createVote(vote))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AnnotationDisplay));