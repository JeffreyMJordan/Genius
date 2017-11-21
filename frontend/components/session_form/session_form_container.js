import {connect} from "react-redux";
import {login, logout, signup} from "../../actions/session_actions";
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  let formType = ownProps.match.path==="/login"? "login" : "signup" ;
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session,
    formType: formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action = ownProps.match.path==="/login"? login : signup ;
  return {
    formSubmit: (user) => dispatch(action(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);