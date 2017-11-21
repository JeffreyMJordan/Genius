import React from "react";
import {Link} from 'react-router-dom';

class Header extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    if(this.props.currentUser){
      return (
        <div class="header">
          <h1>Hi {this.props.currentUser.username}</h1>
          <button onClick={() => this.props.logout()}>Logout</button>
        </div>
      );
    }else{
      return (
        <div class="header">
          <h1>Log In Please</h1>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Sign In</Link>
        </div>
      );
    }
  }
}

export default Header;