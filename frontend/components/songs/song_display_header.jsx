import React from "react";

class SongDisplayHeader extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
    <div className="song-display-header" style={{backgroundImage: `url(${this.props.album.image_url})`}}>
      <div className="song-display-header-inner">
          <img className="song-display-header-inner-image" src={`${this.props.album.image_url}`} alt=""/>
        </div>
    </div>);
  }
}

export default SongDisplayHeader;