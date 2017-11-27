import React from "react";
import AnnotationIndexItem from "./annotation_index_item";

class AnnotationDisplay extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAnnotationsByReferent(this.props.refId);
  }

  componentWillReceiveProps(newProps){
    if(newProps.annotations===undefined){
      this.props.fetchAnnotationsByReferent(newProps.refId);
    }
  }

  render(){
    if(this.props.annotations){
      
      return (
        <div className="annotation-display fixed">
          <ul>
            {this.props.annotations.map((ann) => <AnnotationIndexItem annotation={ann}/>)}
          </ul>
        </div>
      );
    }else{
      return (
        <div className="annotation-display fixed">
          
        </div>
      );
    }
    
  }
}

export default AnnotationDisplay;