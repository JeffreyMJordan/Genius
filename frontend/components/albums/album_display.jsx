import React from "react";
import AlbumDisplayHeader from './album_display_header';
import AlbumDisplayIndex from './album_display_index';

class AlbumDisplay extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAlbum(this.props.albumId)
    .then((res) => this.props.fetchSongsByAlbumId(this.props.albumId));
  }

  render(){
    console.log(this.props.songs);
    if (this.props.album){
      return (
        <div>
          <AlbumDisplayHeader album={this.props.album}/>
          <AlbumDisplayIndex album={this.props.album} songs={this.props.songs}/>
        </div>
      );
    }else{
      return(
        <h1>No Album by that ID</h1>
      );
    }
    
  }
}

export default AlbumDisplay;