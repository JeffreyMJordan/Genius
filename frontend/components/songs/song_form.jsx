import React from "react";
import {withRouter} from "react-router-dom";

class SongForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      albumName: "",
      artistName: "",
      title: "",
      creator_id: this.props.currentUser.id,
      lyrics: "",
      albumImageURL: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createSong(this.state)
      .then((action) => this.props.history.push(`/songs/${action.song.id}`));
  }

  handleChange(type){
    return (e) => {
      this.setState({[type]: e.target.value});
      console.log(this.state);
    };
  }

  render(){
    return (
      <div className="song-form">
        <h2>Add a Song</h2>

        <form action="" onSubmit={this.handleSubmit} >
          
          <h3>Title</h3>
          <input type="text" 
          
          value={this.state.title} 
          onChange={this.handleChange('title')}/>
          
          <h3>Album</h3>
          <input type="text" 
          
          value={this.state.albumName}
          onChange={this.handleChange('albumName')}/>

          <h3>Album Image URL</h3>
          <input type="text"  
          
          value={this.state.albumImageURL}
          onChange={this.handleChange('albumImageURL')}/>

          <h3>Artist</h3>
          <input type="text" 
          value={this.state.artistName}
          onChange={this.handleChange('artistName')}/>

          <h3>Lyrics</h3>
          <textarea type="text" 
          value={this.state.lyrics}
          onChange={this.handleChange("lyrics")}/>

          <input className="song-submit" type="submit" value="Create Song"/>
        </form>
      </div>
    );
  }
}

export default withRouter(SongForm);