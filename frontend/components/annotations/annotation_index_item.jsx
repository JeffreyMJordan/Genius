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

  componentDidMount(){
    this.props.fetchVotesByAnnotation(this.props.annotation.id);
  }

  render(){
    console.log(this.props);
    let deleteButton = undefined;
    let username = "Unknown";
    let body = "";
    if (this.props.annotation){
      username = this.props.annotation.username;
      body = this.props.annotation.body;
      if(this.props.annotation.author_id === this.props.currentUser.id){
        deleteButton = (<a className="annotation-delete" onClick={this.handleClick}>Delete</a>);
      }
    }

    

    return (
      <li className="annotation-index-item">
        <p className="username">{username}</p>
        <br/>
        <a onClick={this.showComments}>{body}</a> 
        <br/>
        {deleteButton}
      </li>
    );
  }

}

export default withRouter(AnnotationIndexItem);