import React from "react";

class SongLyrics extends React.Component{
  constructor(props){
    super(props); 
    this.handleHighlight = this.handleHighlight.bind(this);
    this.createLyrics = this.createLyrics.bind(this);
    this.createIdxRefs = this.createIdxRefs.bind(this);
  } 


  //Create a hash of start_indices mapped to referents
  //Do the same for end_indices

  handleHighlight(e){
    console.log(window.getSelection().getRangeAt(0));
    console.log(window.getSelection());
  }

  createIdxRefs(){
    let startIdxRefs = {};
    let endIdxRefs = {};
    this.props.referents.forEach((ref) => {
      startIdxRefs[ref.start_idx] = ref;
      endIdxRefs[ref.end_idx] = ref;
    });
    return {startIdxRefs, endIdxRefs};
  }

  createLyrics(){
    let {startIdxRefs, endIdxRefs} = this.createIdxRefs();
    let str = "";
    this.props.song.lyrics.split("").forEach((letter, idx) => {
      if (startIdxRefs[idx]){
        str += "<a>";
        str += letter;
      }else if (endIdxRefs[idx]){
        str += letter;
        str += "</a>";
      }else{
        str += letter;
      }
      
    });
    return {__html: str};
  }

  render(){
    return (
    <div onMouseUp={this.handleHighlight} className="lyrics">
      <div dangerouslySetInnerHTML={this.createLyrics()}/>
    </div>);
  }
}

export default SongLyrics;