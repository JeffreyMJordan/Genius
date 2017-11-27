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
          <h2>Fragment: {this.props.fragment}</h2>
          <h3>Annotations: </h3>
          <ul>
             {this.props.annotations.map((ann) => <AnnotationIndexItem key={ann.id} annotation={ann}/>)}
           </ul>
          <Link className="new-annotation-link" to={`/songs/${this.props.songId}/${this.props.refId}/createannotation`}>Create new annotation</Link>
        </div>
      );
    }else{
      return (
        <div className="annotation-display fixed">
          <h2>Fragment: {this.props.fragment}</h2>
          <Link className="new-annotation-link" to={`/songs/${this.props.songId}/${this.props.refId}/createannotation`}>Create new annotation</Link>
        </div>
      );
    }
    
  }
}

export default AnnotationDisplay;