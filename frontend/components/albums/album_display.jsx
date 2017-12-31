import React from "react";


class AlbumDisplay extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAlbum(this.props.albumId);
  }

  render(){
    return (
      <div>It's working</div>
    );
  }
}

export default AlbumDisplay;