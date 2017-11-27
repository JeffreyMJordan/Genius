import React from "react";
import AnnotationIndexItem from "./annotation_index_item";
import {Link} from "react-router-dom";

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
          <Link to={`/songs/${this.props.songId}/${this.props.refId}/createannotation`}>Create new annotation</Link>
        </div>
      );
    }else{
      return (
        <div className="annotation-display fixed">
          
          <Link to={`/songs/${this.props.songId}/${this.props.refId}/createannotation`}>Create new annotation</Link>
        </div>
      );
    }
    
  }
}

export default AnnotationDisplay;