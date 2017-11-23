import React from "react";
import {Link} from "react-router-dom";

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      username: "",
      password: ""
    };
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
    let buttonText = this.props.formType==="login"? "Sign In" : "Sign Up";
    return (
      <div className="modal">
        <div className="modal-screen"></div>

        <div className="modal-form">
        <Link className="x-button" to="/">X</Link>
        <h2>{text}</h2>
        <form onSubmit={this.handleSubmit} action="">
          <label htmlFor="">
            <input className="text-form" type="text" placeholder="Username" onChange={this.handleChange('username')} value={this.state.username}/>
          </label>
          <br/>
          <label htmlFor="">
            <input className="text-form" type="password" placeholder="Password" onChange={this.handleChange('password')} value={this.state.password}/>
          </label>
          <br/>
          <input type="submit" className="submit-button" value={buttonText}/>
        </form>
        </div>
      </div>
    );

  }
}

export default SessionForm;