import React from "react";

class CommentIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.deleteComment(this.props.comment.id);
  }

  render(){
    let deleteButton = undefined;
    if(this.props.comment.author_id === this.props.currentUser.id){
      deleteButton = (<a className="annotation-delete" onClick={this.handleClick}>Delete</a>);
    }
    return (
      <li className="annotation-index-item">
        <a>{this.props.comment.body}</a> {deleteButton}
      </li>
    );
  }
}

export default CommentIndexItem;