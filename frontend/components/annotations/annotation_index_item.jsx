import React from "react";
import {withRouter} from "react-router-dom";

class AnnotationIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.showComments = this.showComments.bind(this);
    this.createUpvote = this.createUpvote.bind(this);
    this.createDownvote = this.createDownvote.bind(this);
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
      if (this.props.currentUser.votes[this.props.annotation.id]){
        this.props.updateVote(this.props.currentUser.votes[this.props.annotation.id].id);
      }else{
        this.props.createVote({
          user_id: this.props.currentUser.id,
          annotation_id: this.props.annotation.id,
          vote_type: type}
        );
      }
    };
  }


  createUpvote(){
    if(this.props.currentUser.votes[this.props.annotation.id]){
      
      if(this.props.currentUser.votes[this.props.annotation.id].vote_type === "up"){
        return (<p 
          className="upvote" 
          style={{color: `#FF8B60`}}
          onClick={() => this.props.deleteVote(this.props.currentUser.votes[this.props.annotation.id].id)}>
            &#8679;
          </p>);
      }else{
        return (<p className="upvote" onClick={this.handleVote("up")} >&#8679;</p>);
      }
      
    }else{
      return (<p className="upvote" onClick={this.handleVote("up")} >&#8679;</p>);
    }
  }



  createDownvote(){
    if(this.props.currentUser.votes[this.props.annotation.id]){
      if(this.props.currentUser.votes[this.props.annotation.id].vote_type === "down"){
        return (<p className="downvote" 
        style={{color: `#9494FF`}} 
        onClick={() => this.props.deleteVote(this.props.currentUser.votes[this.props.annotation.id].id)}>&#8681;</p>);
      }else{
        return (<p className="downvote" onClick={this.handleVote("down")}>&#8681;</p>);
      }
    }else{
      return (<p className="downvote" onClick={this.handleVote("down")}>&#8681;</p>);
    }
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
        
        <div className="annotation-content"><a className="annotation-body" onClick={this.showComments}>{body}</a>
        <div className="votes-container"> 
           {/* Upvote button */}
          {this.createUpvote()}
          <p className="total-container">{total}</p>

          {/* Downvote button */}
          {this.createDownvote()}
          </div>
        </div>
        
        {deleteButton}
      </li>
    );
  }

}

export default withRouter(AnnotationIndexItem);