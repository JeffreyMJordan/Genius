import React from "react";
import SongDisplayHeader from './song_display_header';
import SongLyrics from './song_lyrics';
import {withRouter} from "react-router-dom";

class SongDisplay extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchPayloadBySongID(this.props.match.params.songId);
  }

  componentWillReceiveProps(newProps){
    if (newProps.album===undefined){
      this.props.fetchPayloadBySongID(newProps.match.params.songId);
    }
    
  }


  render(){
    if(this.props.artist && this.props.song && this.props.album){
      return (
        <div className="song-display">
          <SongDisplayHeader song={this.props.song} album={this.props.album} artist={this.props.artist}/>
          <div className="lyrics-container">
            <h1>Lyrics</h1>
            <SongLyrics 
            song={this.props.song}
            referents={this.props.referents}
            />
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

export default withRouter(SongDisplay);