import React from "react";

class SongForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      albumName: "",
      artistName: "",
      title: "",
      creator_id: this.props.currentUser.id,
      lyrics: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createSong(this.state);
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
        <form action="" onSubmit={this.handleSubmit} >
    
          <input type="text" 
          placeholder="Title" 
          value={this.state.title} 
          onChange={this.handleChange('title')}/>

          <input type="text" 
          placeholder="Album"
          value={this.state.albumName}
          onChange={this.handleChange('albumName')}/>

          <input type="text" placeholder="Artist"
          value={this.state.artistName}
          onChange={this.handleChange('artistName')}/>

          <textarea type="text" placeholder="Lyrics"
          value={this.state.lyrics}
          onChange={this.handleChange("lyrics")}/>

          <input type="submit" value="Create Song"/>
        </form>
      </div>
    );
  }
}

export default SongForm;