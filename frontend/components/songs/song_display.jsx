import React from "react";

class SongDisplay extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    // this.props.fetchPayload(this.props.songId);
  }


  render(){
    if(this.props.artist && this.props.song && this.props.album){
      return (
        <div className="song-display">
          <p>Title: {this.props.song.title}</p>
          <p>Artist: {this.props.artist.name}</p>
          <p>Album: {this.props.album.title}</p>
          <img src={this.props.album.image_url} alt="album_image"/>
          <h1>Lyrics</h1>
          <p>{this.props.song.lyrics}</p>
          
        </div>
      );
    }else{
      return null;
    }
    
    
  }

}

export default SongDisplay;