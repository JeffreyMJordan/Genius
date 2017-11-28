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
        placeholder="Annotation" 
        value={this.state.body}
        onChange={this.handleChange('body')}/>

        <a><input type="submit" className="new-annotation-button" value="Create Annotation"/></a>
      </form>
      <br/>
      </div>
    </div>);
  }

}


export default AnnotationForm;