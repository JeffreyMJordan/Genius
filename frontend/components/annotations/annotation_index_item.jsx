import React from "react";
import {withRouter} from "react-router-dom";

class AnnotationIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.showComments = this.showComments.bind(this);
  }


  handleClick(){
    this.props.deleteAnnotation(this.props.annotation.id);
  }

  showComments(){
    this.props.history.push(`/songs/${this.props.songId}/${this.props.annotation.referent_id}/comments/${this.props.annotation.id}`);
  }

  render(){
    let deleteButton = undefined;
    if(this.props.annotation.author_id === this.props.currentUser.id){
      deleteButton = (<a className="annotation-delete" onClick={this.handleClick}>Delete</a>);
    }

    return (
      <li className="annotation-index-item">
        <p className="username">{this.props.annotation.username}</p>
        <br/>
        <a onClick={this.showComments}>{this.props.annotation.body}</a> 
        <br/>
        {deleteButton}
      </li>
    );
  }

}

export default withRouter(AnnotationIndexItem);