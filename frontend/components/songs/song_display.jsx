import React from "react";
import SongDisplayHeader from './song_display_header';
class SongDisplay extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    console.log("here");
    this.props.fetchPayloadBySongID(this.props.songId);
  }


  render(){
    if(this.props.artist && this.props.song && this.props.album){
      return (
        <div className="song-display">
          <SongDisplayHeader song={this.props.song} album={this.props.album} artist={this.props.artist}/>
          <div className="lyrics-container">
            <h1>Lyrics</h1>
            <p>{this.props.song.lyrics}</p>
          </div>
        </div>
      );
    }else{
      return (
      <div className="song-display">
        <h1>No song by that name</h1>
      </div>);
    }
    
    
  }

}

export default SongDisplay;