import React from "react";

class AnnotationIndexItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <li className="annotation-index-item">
        {this.props.annotation.body}
      </li>
    );
  }

}

export default AnnotationIndexItem;