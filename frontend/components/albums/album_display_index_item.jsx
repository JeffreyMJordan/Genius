import React from 'react';
import {Link} from "react-router-dom";

export default ({song, album}) => {
  console.log(song)
  return (<li className="song-index-item">
  <Link to={`/songs/${song.id}`}>
  <img className="song-index-item-image" src={album.image_url} alt="No album image :)"/>
  <br/>
  <div className="song-index-item-information">
    <div className="song-index-item-title">
      {song.title}
    </div>
    <br/>
  </div>
  <br/>
  </Link>
  
</li>);
};

