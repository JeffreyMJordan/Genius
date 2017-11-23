import React from "react"; 
import SongIndexItem from "./song_index_item";

class SongsIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchSongs();
  }

  render(){
    const songs = this.props.songs;
    return (
      <div>
        <ul>
          {songs.map((song) => <SongIndexItem key={song.id} song={song}/>)}
        </ul>
        
      </div>
    );
  }
}

export default SongsIndex;