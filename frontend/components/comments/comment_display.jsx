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
      this.props.fetchCommentsByAnnotation(newProps.annotation_id);
    }else if(newProps.annotation===undefined){
      console.log(this.props.annotation_id);
      this.props.fetchAnnotation(parseInt(this.props.annotation_id));
    }
  }

  render(){
    let annotationHolder = (<h3 className="fixed-fragment">Annotation: </h3>);
    if (this.props.annotation){
      annotationHolder = <h3 className="fixed-fragment">Annotation: {this.props.annotation.body}</h3>;
    }

    console.log(this.props);
    if(this.props.comments && this.props.annotation){
      return(
        <div className="fixed">
          <div className="fixed-content">
            {annotationHolder}
            <h3 className="bottom-line">Comments</h3>
            <ul>
              {this.props.comments.map((comment) => <CommentIndexItem comment={comment} />)}
            </ul>
          </div>
          <a href="" className="new-annotation-button">Create New Comment</a>
          <a className="back-button" onClick={() => this.props.history.push(`/songs/${this.props.songId}/${this.props.refId}`)}>&#8592;</a>
        </div>
      );
    }else{
      return(
        <div className="fixed">
          <div className="fixed-content">
            {annotationHolder}
            <h3 className="bottom-line">Comments</h3>
            <ul>
              
            </ul>
          </div>
          <a href="" className="new-annotation-button">Create New Comment</a>
          <a className="back-button" onClick={() => this.props.history.push(`/songs/${this.props.songId}/${this.props.refId}`)}>&#8592;</a>
        </div>
      );
    }
    
  }
}

export default CommentDisplay;