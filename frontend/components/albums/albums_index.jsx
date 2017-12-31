import React from "react";
import AlbumIndexItem from './album_index_item';

class AlbumsIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAlbums();
  }

  render(){
    return (
      <div className="songs-index">
        <ul>
          <li>
            <div className="songs-index-header">
              <h3>Top Albums</h3>
            </div>
          </li>
          {this.props.albums.map((album) => <AlbumIndexItem 
            key={album.id}
            album={album}
          />)}
        </ul>
      </div>
    );
  }
}

export default AlbumsIndex;