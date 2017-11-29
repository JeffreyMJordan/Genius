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
    debugger;
    if(newProps.annotations.length===0){
      debugger;
      this.props.deleteReferent(this.props.refId)
        .then((res) => this.props.history.push(`/songs/${this.props.songId}`));
    }
  }

  render(){

    if(this.props.annotations){
      
      return (
        <div className="fixed">
          <div className="fixed-content">
            <h3 className="fixed-fragment">{this.props.fragment}</h3>
            <h3 className="bottom-line">Annotations (click to see comments)</h3>
            <ul>

              {this.props.annotations.map((ann) => <AnnotationIndexItem key={ann.id} 
              annotation={ann} 
              currentUser={this.props.currentUser} 
              deleteAnnotation={this.props.deleteAnnotation}
              songId={this.props.songId}/>)}
            </ul>
            <br/>
            <Link className="new-annotation-button" to={`/songs/${this.props.songId}/${this.props.refId}/createannotation`}>Create new annotation</Link>
          </div>
        </div>
      );
    }else{
      return (
        <div className="fixed">
          <div className="fixed-content">
            <h3 className="fixed-fragment">{this.props.fragment}</h3>
            <br/>
            <Link className="new-annotation-button" to={`/songs/${this.props.songId}/${this.props.refId}/createannotation`}>Create new annotation</Link>
          </div>
        </div>
      );
    }
    
  }
}

export default AnnotationDisplay;