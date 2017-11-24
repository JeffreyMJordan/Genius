import React from "react";

class SongLyrics extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
    <div onMouseUp={(e) => console.log(window.getSelection().getRangeAt(0))} className="lyrics">
      {this.props.song.lyrics}
    </div>);
  }
}

export default SongLyrics;