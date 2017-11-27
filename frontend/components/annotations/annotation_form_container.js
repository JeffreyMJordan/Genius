import {createAnnotation} from "../../actions/annotation_actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import AnnotationForm from "./annotation_form";

//This needs the referentId
//Also the current user id 
const mapStateToProps = (state, ownProps) => {
  let refId = ownProps.match.params.refId;
  return {
    currentUser: state.session.currentUser,
    refId
  };
}; 

const mapDispatchToProps = (dispatch) => { 
  return {
    createAnnotation: (annotation) => dispatch(createAnnotation(annotation))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnnotationForm);