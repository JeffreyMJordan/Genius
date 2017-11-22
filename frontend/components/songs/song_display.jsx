import React from "react";

class SongDisplay extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="song-display">
        <p>{this.props.song.title}</p>
        <p>{this.props.song.lyrics}</p>
      </div>
    );
  }

}

export default SongDisplay;