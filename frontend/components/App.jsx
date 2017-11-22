import React from "react";
import HeaderContainer from './header/header_container';
import SessionFormContainer from './session_form/session_form_container';
import {Route} from "react-router-dom";
import {AuthRoute} from "../util/route_util";
const App = () => (
  <div>
    <HeaderContainer />
    <AuthRoute path="/login" component={SessionFormContainer}/>
    <AuthRoute path="/signup" component={SessionFormContainer}/>


  </div>
);

export default App;