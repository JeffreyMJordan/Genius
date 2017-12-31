import React from 'react';
import {Link} from "react-router-dom";

export default ({album}) => {
  return (<li className="song-index-item">
  <Link to={`/albums/${album.id}`}>
  <img className="song-index-item-image" src={album.image_url} alt="No album image :)"/>
  <br/>
  <div className="song-index-item-information">
    <div className="song-index-item-title">
      {album.title}
    </div>
    <br/>
  </div>
  <br/>
  </Link>
  
</li>)
};