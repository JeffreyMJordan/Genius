import React from "react";
import {withRouter} from "react-router-dom";

class AnnotationIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    console.log(this.props);
  }


  handleClick(){
    this.props.deleteAnnotation(this.props.annotation.id)
      .then((res) => {
        this.props.history.push(`/songs/${this.props.songId}`);
        window.location.reload();});
  }

  render(){
    let deleteButton = undefined;
    if(this.props.annotation.author_id === this.props.currentUser.id){
      deleteButton = (<a onClick={this.handleClick}>Delete</a>);
    }

    return (
      <li className="annotation-index-item">
        {this.props.annotation.body} {deleteButton}
      </li>
    );
  }

}

export default withRouter(AnnotationIndexItem);