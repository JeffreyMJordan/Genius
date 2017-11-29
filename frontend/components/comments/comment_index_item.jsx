import React from "react";

class CommentIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <li>
        {this.props.comment.body}
      </li>
    );
  }
}

export default CommentIndexItem;