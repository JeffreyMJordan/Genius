import React from "react";

class AlbumDisplayHeader extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
    <div className="song-display-header" style={{backgroundImage: `url(${this.props.album.image_url})`}}>
      <div className="song-display-header-inner">
          <img className="song-display-header-inner-image" src={`${this.props.album.image_url}`} alt=""/>
          <ul>
            <li className="inner-song-title">{this.props.album.title}</li>
          </ul>
      </div>
    </div>);
  }
}

export default AlbumDisplayHeader;