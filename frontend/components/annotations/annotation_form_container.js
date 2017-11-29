import {createAnnotation} from "../../actions/annotation_actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import AnnotationForm from "./annotation_form";

//This needs the referentId
//Also the current user id 

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
  let song = state.songs[songId];
  let ref = findReferent(state.referents[songId], refId);
  let fragment = song.lyrics.slice(ref.start_idx, ref.end_idx);
  return {
    currentUser: state.session.currentUser,
    refId,
    songId,
    fragment
  };
}; 

const mapDispatchToProps = (dispatch) => { 
  return {
    createAnnotation: (annotation) => dispatch(createAnnotation(annotation))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnnotationForm);