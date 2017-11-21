import React from "react";

class SessionForm extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    
    if(this.props.formType==="login"){
      return (
        <div> 
          <h1>Login</h1>
        </div>
      );
    }else{
      return (
        <div> 
          <h1>Signup</h1>
        </div>
      );
    }

    
  }
}

export default SessionForm;