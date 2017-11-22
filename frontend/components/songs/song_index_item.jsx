import React from "react";
import {Link} from "react-router-dom";
export default ({song}) => {
  return (
    <li>
      <Link to={`/songs/${song.id}`}>{song.title}</Link>
      
    </li>
  );
};