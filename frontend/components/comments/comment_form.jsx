import React from "react";
import {withRouter, Redirect} from "react-router-dom";

class CommentForm extends React.Component{
  constructor(props){
    super(props);
    if (this.props.loggedIn){
      this.state={
        author_id: this.props.currentUser.id,
        annotation_id: this.props.match.params.annId,
        body: ""
      };
    }else{
      this.state={
        author_id: undefined,
        annotation_id: this.props.match.params.annId,
        body: ""
      };
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(type){
    return (e) => {
      this.setState({[type]: e.target.value});
      console.log(this.state);
    };
  }

  handleClick(e){
    if (this.props.loggedIn){
      this.props.createComment(this.state);
    }else{
      <Redirect to='/login' />;
    }
  }

  render(){
    return (
    <div className="internal-fixed">
    <div className="fixed-content"> 
      <h3>Add Comment</h3>
      <form action="">
        <textarea
        value={this.state.body}
        onChange={this.handleChange('body')}
        />
          
        
      </form>
    </div>
      <br/>
      <a onClick={this.handleClick}className="new-annotation-button">Create New Comment</a>
      <a className="back-button" onClick={() => this.props.history.push(`/songs/${this.props.match.params.songId}/${this.props.match.params.refId}`)}>&#8592;</a>
    </div>
    );
  }
}

export default withRouter(CommentForm);