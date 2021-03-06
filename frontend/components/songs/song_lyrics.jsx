import React from "react";
import {Link, withRouter} from "react-router-dom";
import {AnnotationDisplay} from '../annotations/annotation_display';
import {Route} from "react-router-dom";


class SongLyrics extends React.Component{
  constructor(props){
    super(props); 
    this.handleHighlight = this.handleHighlight.bind(this);
    this.createLyrics = this.createLyrics.bind(this);
    this.createIdxRefs = this.createIdxRefs.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.clickedEl = undefined
    this.resetClicked = this.resetClicked.bind(this);
  } 



  //Create a hash of start_indices mapped to referents
  //Do the same for end_indices

  handleHighlight(e){
    let startIdx = window.getSelection().getRangeAt(0).startOffset;
    let endIdx = window.getSelection().getRangeAt(0).endOffset;
    if(startIdx!=endIdx){
      this.props.history.push(`/songs/${this.props.match.params.songId}/create/${startIdx}/${endIdx}`);
    }else{
      this.resetClicked();
      this.props.history.push(`/songs/${this.props.match.params.songId}`);
    }
  }

  createIdxRefs(){
    let startIdxRefs = {};
    let endIdxRefs = {};
    if(this.props.referents){
      this.props.referents.forEach((ref) => {
        startIdxRefs[ref.start_idx] = ref;
        endIdxRefs[ref.end_idx] = ref;
      });
    }
    
    return {startIdxRefs, endIdxRefs};
  }

  resetClicked(){
    if (this.clickedEl){
      this.clickedEl.id = "";
    }
  }

  handleClick(id){
    return (e) => {
      console.log(e.target.id);
      e.target.id = "clicked";
      console.log(e.target.id);
      this.resetClicked();
      this.clickedEl = e.target;
      let last = this.props.history.last;
      this.props.history.push(`/songs/${this.props.match.params.songId}/${id}`);
    };
  }



  createLyrics(){
    let {startIdxRefs} = this.createIdxRefs();
    let arr = [];
    for(var i = 0; i<this.props.song.lyrics.length; i++){
      let letter = this.props.song.lyrics[i];
      if(startIdxRefs[i]){
        let ref = startIdxRefs[i];
        arr.push(<a key={ref.start_idx} onClick={this.handleClick(ref.id)}>
        {this.props.song.lyrics.slice(ref.start_idx, ref.end_idx)}
        </a>);
        i = ref.end_idx-1;
      }else{
        arr.push(letter);
      }
    }
    return arr;
  }

  render(){
    return (
    <div onMouseUp={this.handleHighlight} className="lyrics-content-container">
      <div
        className="ghost">{this.props.song.lyrics}
      </div>
      <div className="lyrics">{this.createLyrics()}</div>
    </div>);
  }
}

export default withRouter(SongLyrics);