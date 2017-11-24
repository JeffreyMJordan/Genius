import React from "react";

class SongLyrics extends React.Component{
  constructor(props){
    super(props); 
    this.handleHighlight = this.handleHighlight.bind(this);
  } 

  handleHighlight(e){
    console.log(window.getSelection().getRangeAt(0));
    console.log(window.getSelection());
  }

  render(){
    return (
    <div onMouseUp={this.handleHighlight} className="lyrics">
      {this.props.song.lyrics}
    </div>);
  }
}

export default SongLyrics;