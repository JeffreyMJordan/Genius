import {connect} from "react-redux";
import {Route, withRouter, Redirect} from "react-router-dom";
import React from "react";


const Auth = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
    loggedIn ? (
      <Redirect to="/" />
    ) : (
      <Component {...props} />
    )
  )} />
);

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export const AuthRoute = withRouter(connect(mapStateToProps, mapDispatchToProps)(Auth));