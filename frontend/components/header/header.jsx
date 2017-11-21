import React from "react";

class Header extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    if(this.props.currentUser){
      return (<h1>Hi {this.props.currentUser.username}</h1>);
    }else{
      return (<h1>Log In Please</h1>);
    }
  }
}

export default Header;