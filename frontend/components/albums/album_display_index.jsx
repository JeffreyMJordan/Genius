import React from "react"; 
import {Route} from "react-router-dom";
import AlbumDisplayIndexItem from './album_display_index_item';

class AlbumDisplayIndex extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props.songs);
    return (
      <div className="songs-index">
      <ul>
        <li>
          <div className="songs-index-header">
            <h3>Track List</h3>
          </div>
        </li>
        {this.props.songs.map((song) =>  <AlbumDisplayIndexItem album={this.props.album} song={song}/>)}
      </ul>
    </div>);
  }
}

export default AlbumDisplayIndex;