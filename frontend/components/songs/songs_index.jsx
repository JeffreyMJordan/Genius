import React from "react"; 
import SongIndexItem from "./song_index_item";

class SongsIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchPayloads(10);
  }

  render(){
    const songs = this.props.songs;
    return (
      <div>
        <ul>
          {songs.map((song) => <SongIndexItem key={song.id} song={song} artist={this.props.artists[song.artist_id]} album={this.props.albums[song.album_id]}/>)}
        </ul>
        
      </div>
    );
  }
}

export default SongsIndex;