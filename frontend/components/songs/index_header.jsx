import React from 'react';

class SongIndexHeader extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="song-index-splash">
        <h1><strong>Annotate the world</strong></h1>
      </div>
    );
  }
}

export default SongIndexHeader;