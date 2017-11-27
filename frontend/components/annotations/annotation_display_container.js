import AnnotationDisplay from './annotation_display';
import {connect} from "react-redux";
import {fetchAnnotation, fetchAnnotationsByReferent} from "../../actions/annotation_actions";
import {withRouter }from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  let refId = ownProps.match.params.refId;
  let songId = ownProps.match.params.songId;
  return {
    refId,
    annotations: state.annotations[refId],
    songId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAnnotation: (id) => dispatch(fetchAnnotation(id)),
    fetchAnnotationsByReferent: (refId) => dispatch(fetchAnnotationsByReferent(refId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AnnotationDisplay));