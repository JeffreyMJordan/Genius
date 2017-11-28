import React from "react";
import {Link} from "react-router-dom";

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    if (this.props.formType==="login"){
      this.state = {
        username: "Demo User",
        password: "password"
      };
    }else{
      this.state = {
        username: "",
        password: ""
      }; 
    }
    
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.formSubmit(this.state);
  }

  handleChange(type){
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  }

  render(){
    let text = this.props.formType==="login"? "Sign in to Genius" : "Sign up for Genius";
    let toggleText = this.props.formType==="login"? "Don't have an account? " : "Already have an account? ";
    let linkText = this.props.formType==="login"? "/signup" : "/login";
    let buttonText = this.props.formType==="login"? "Sign In" : "Sign Up";
    let altButtonText = this.props.formType==="login"? "Sign Up" : "Sign In";
    return (
      <div className="song-form">
        
        <ul className="errors">
          {this.props.errors.map((error) => (<li key={error} >{error}</li>))}
        </ul>
        
        <h2>{text}</h2>
        <p>{toggleText} <Link className="yellow-anchor-tag" to={linkText} >{altButtonText}</Link></p>
        <form onSubmit={this.handleSubmit} action="">
          
          <h3>Username</h3>  
          <input  type="text" placeholder="Username" onChange={this.handleChange('username')} value={this.state.username}/>
          
          
          <h3>Password</h3>
          <input  type="password" placeholder="Password" onChange={this.handleChange('password')} value={this.state.password}/>
          
          
          <input className="song-submit" type="submit" value={buttonText}/>
        </form>
      </div>
    );

  }
}

export default SessionForm;