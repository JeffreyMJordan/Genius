import React from "react"; 
import {Route} from "react-router-dom";
import AlbumDisplayIndexItem from './album_display_index_item';

class AlbumDisplayIndex extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props.songs);
    return (<ul>
      {this.props.songs.map((song) =>  <AlbumDisplayIndexItem album={this.props.album} song={song}/>)}
    </ul>);
  }
}

export default AlbumDisplayIndex;