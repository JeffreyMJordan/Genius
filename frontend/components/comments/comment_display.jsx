import React from "react";
import CommentIndexItem from './comment_index_item';

class CommentDisplay extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props);
  }

  componentDidMount(){
    this.props.fetchCommentsByAnnotation(this.props.annotation_id);
  }

  componentWillReceiveProps(newProps){
    if(newProps.comments===undefined){
      this.props.fetchCommentsByAnnotation(newProps.annotation_Id);
    }
  }

  render(){
    console.log(this.props);
    if(this.props.comments && this.props.annotation){
      return(
        <div className="fixed">
          <div className="fixed-content">
            <h3 className="fixed-fragment">{this.props.annotation.body}</h3>
            <ul>
              {this.props.comments.map((comment) => <CommentIndexItem comment={comment} />)}
            </ul>
          </div>
        </div>
      );
    }else{
      return(
        <div>

        </div>
      );
    }
    
  }
}

export default CommentDisplay;