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

  handleVote(type){
    return (e) => {
      e.preventDefault();
      console.log({
        user_id: this.props.currentUser.id,
        annotation_id: this.props.annotation.id,
        vote_type: type});

      this.props.createVote({
        user_id: this.props.currentUser.id,
        annotation_id: this.props.annotation.id,
        vote_type: type});
    };
  }

  render(){
    
    let deleteButton = undefined;
    let username = "Unknown";
    let total = "0";
    let body = "";
    if (this.props.annotation){
      username = this.props.annotation.username;
      body = this.props.annotation.body;
      if(this.props.annotation.author_id === this.props.currentUser.id){
        deleteButton = (<a className="annotation-delete" onClick={this.handleClick}>Delete</a>);
      }
      total = this.props.total;
    }
    
    return (
      <li className="annotation-index-item">
        <p className="username">{username}</p>
        
        <a className="annotation-content"><a className="annotation-body" onClick={this.showComments}>{body}</a>
        <p className="votes-container"> 
           {/* Upvote button */}
          <p className="upvote" onClick={this.handleVote("up")} >&#8679;</p>
          <p className="total-container">{total}</p>

          {/* Downvote button */}
          <p className="downvote" onClick={this.handleVote("down")}>&#8681;</p>
          </p>
        </a>
        
        {deleteButton}
      </li>
    );
  }

}

export default withRouter(AnnotationIndexItem);