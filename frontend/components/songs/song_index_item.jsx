import React from "react";
import {Link} from "react-router-dom";
export default ({song, album, artist}) => {
  return (
    <li>
      <Link to={`/songs/${song.id}`}>
      {song.title}
      <br/>
      {artist.name}
      <br/>
      <img src={album.image_url} alt=""/>
      </Link>
      
    </li>
  );
};