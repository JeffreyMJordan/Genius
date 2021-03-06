import React from "react";

class AnnotationForm extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    
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

  getOffset(){
    let min = -10;
    if (window.pageYOffset - 400 > min){
      return window.pageYOffset - 400;
    }else{
      return min;
    }
  }

  render(){
    return (
    <div className="fixed" style={{top: this.getOffset()}}>
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
      <a className="back-button" onClick={() => this.props.history.push(`/songs/${this.props.songId}/${this.props.refId}`)}>&#8592;</a>
    </div>);
  }

}


export default AnnotationForm;