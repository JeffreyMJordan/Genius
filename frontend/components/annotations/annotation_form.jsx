import React from "react";

class AnnotationForm extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    console.log(this.props.currentUser);
    this.state = {
      referent_id: this.props.refId,
      author_id: this.props.currentUser.id,
      body: ""
    };
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createAnnotation(this.state)
    .then((res) => {
      this.props.history.push(`/songs/${this.props.songId}/${this.props.refId}`);
    });
  }

  handleChange(type){
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  }

  render(){
    return (
    <div className="fixed">
      <div className="fixed-content">
      <h3 className="fixed-fragment">{this.props.fragment}</h3>
      <h2>New annotation</h2>
      <form action="" onSubmit={this.handleSubmit}>
        <textarea type="text" 
        value={this.state.body}
        onChange={this.handleChange('body')}/>
      </form>
      <br/>
      </div>
      <a type="submit" onClick={this.handleSubmit} className="new-annotation-button">Create Annotation</a>
    </div>);
  }

}


export default AnnotationForm;