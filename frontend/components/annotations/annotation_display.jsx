import React from "react";
import AnnotationIndexItemContainer from "./annotation_index_item_container";
import {Link} from "react-router-dom";

class AnnotationDisplay extends React.Component{
  constructor(props){
    super(props);
    this.getOffset = this.getOffset.bind(this);
  }

  componentDidMount(){
    this.props.fetchAnnotationsByReferent(this.props.refId);
  }

  componentWillReceiveProps(newProps){
    if(newProps.annotations===undefined){
      this.props.fetchAnnotationsByReferent(newProps.refId);
    }else if(newProps.annotations.length===0){
      if(newProps.fragment){
        this.props.deleteReferent(this.props.refId)
        .then((res) => this.props.history.push(`/songs/${this.props.songId}`));
      }     
    }
  }

  getOffset(){
    let min = -10;
    if (window.pageYOffset - 400 > min){
      return window.pageYOffset - 400;
    }else{
      return min;
    }
  }

  render(){
    if(this.props.annotations){
      
      return (
        <div className="fixed" style={{top: this.getOffset()}}>
          <div className="fixed-content">
            <h3 className="fixed-fragment">{this.props.fragment}</h3>
            <h3 className="bottom-line">Annotations (click to see comments)</h3>
            <ul>
              {/* render a container everyhwere I want to render an index item */}
              {/* use ownProps to give it the annotation id */}
              {this.props.annotations.map((ann) => <AnnotationIndexItemContainer
              key={ann.id} 
              annotation={ann}
              songId={this.props.songId}/>)}
            </ul>
            <br/>
            <Link className="new-annotation-button" to={`/songs/${this.props.songId}/${this.props.refId}/createannotation`}>Create new annotation</Link>
          </div>
        </div>
      );
    }else{
      return (
        <div className="fixed" style={{top: this.getOffset()}}>
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