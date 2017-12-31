import React from "react";
import AlbumDisplayHeader from './album_display_header';
// import AlbumDisplayIndex from './album_display_index';

class AlbumDisplay extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAlbum(this.props.albumId);
  }

  render(){
    if (this.props.album){
      return (
        <div>
          <AlbumDisplayHeader album={this.props.album}/>
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