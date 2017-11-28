import React from "react";

class SongDisplayHeader extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let deleteButton = undefined;
    if (this.props.canDelete){
      deleteButton = (<a className="delete-song-button" type="submit" onClick={this.props.deleteSong}>Delete Song</a>);
    }
    return (
    <div className="song-display-header" style={{backgroundImage: `url(${this.props.album.image_url})`}}>
      <div className="song-display-header-inner">
          <img className="song-display-header-inner-image" src={`${this.props.album.image_url}`} alt=""/>
          <ul>
            <li className="inner-song-title">{this.props.song.title}</li>
            <li className="inner-artist-name">{this.props.artist.name}</li>
          </ul>
          {deleteButton}
      </div>
    </div>);
  }
}

export default SongDisplayHeader;