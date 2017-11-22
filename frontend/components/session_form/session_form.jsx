import React from "react";

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
      console.log(this.state);
    };
  }

  render(){
    let text = this.props.formType==="login"? "Sign in to Genius" : "Sign up for Genius";
    let buttonText = this.props.formType==="login"? "Sign In" : "Sign Up";
    return (
      <div className="modal">
        <div className="modal-screen"></div>

        <div className="modal-form">
        <h2>{text}</h2>
        <form onSubmit={this.handleSubmit} action="">
          <label htmlFor="">
            <input type="text" placeholder="Username" onChange={this.handleChange('username')} value={this.state.username}/>
          </label>
          <br/>
          <label htmlFor="">
            <input type="password" placeholder="Password" onChange={this.handleChange('password')} value={this.state.password}/>
          </label>
          <br/>
          <input type="submit" value={buttonText}/>
        </form>
        </div>
      </div>
    );

  }
}

export default SessionForm;