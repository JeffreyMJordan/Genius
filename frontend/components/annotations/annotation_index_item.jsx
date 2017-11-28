import React from "react";

class AnnotationIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    console.log(this.props);
  }


  handleClick(){
    this.props.deleteAnnotation(this.props.annotation.id);
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

export default AnnotationIndexItem;