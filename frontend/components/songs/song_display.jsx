import React from "react";
import SongDisplayHeader from './song_display_header';
import SongLyrics from './song_lyrics';
import {withRouter} from "react-router-dom";
import {LoggedInRoute} from "../../util/route_util";
import {Route} from "react-router-dom";
import AnnotationDisplayContainer from '../annotations/annotation_display_container';
import ReferentFormContainer from "../referents/referent_form_container";
import AnnotationFormContainer from "../annotations/annotation_form_container";

class SongDisplay extends React.Component{
  constructor(props){
    super(props);
    this.deleteSong = this.deleteSong.bind(this);
  }

  componentDidMount(){
    this.props.fetchPayloadBySongID(this.props.match.params.songId);
  }

  componentWillReceiveProps(newProps){
    if (newProps.album===undefined){
      this.props.fetchPayloadBySongID(newProps.match.params.songId);
    } 
  }

  deleteSong(){
    this.props.deleteSong(this.props.song.id)
      .then((res) => this.props.history.push("/"));
  }


  render(){
    if(this.props.artist && this.props.song && this.props.album){

      if(this.props.song.creator_id===this.props.currentUser.id){
        return (
          <div className="song-display">
            <SongDisplayHeader song={this.props.song} album={this.props.album} artist={this.props.artist}/>
              <div className="song-display-content">
                <div className="lyrics-container">
                  <h1>Lyrics</h1>
                  <SongLyrics 
                  song={this.props.song}
                  referents={this.props.referents}
                  />
                </div>
                <Route path="/songs/:songId/create/:startIdx/:endIdx" component={ReferentFormContainer}/>
                <Route exact path="/songs/:songId/:refId" component={AnnotationDisplayContainer}/>
                <LoggedInRoute exact path="/songs/:songId/:refId/createannotation" component={AnnotationFormContainer}/>
                <input type="submit" onClick={this.deleteSong} value="Delete Song"/>
              </div>
          </div>
        );
      }else{
        return (
          <div className="song-display">
            <SongDisplayHeader song={this.props.song} album={this.props.album} artist={this.props.artist}/>
              <div className="song-display-content">
                <div className="lyrics-container">
                  <h1>Lyrics</h1>
                  <SongLyrics 
                  song={this.props.song}
                  referents={this.props.referents}
                  />
                </div>
                <Route path="/songs/:songId/create/:startIdx/:endIdx" component={ReferentFormContainer}/>
                <Route exact path="/songs/:songId/:refId" component={AnnotationDisplayContainer}/>
                <LoggedInRoute exact path="/songs/:songId/:refId/createannotation" component={AnnotationFormContainer}/>
                
              </div>
          </div>
        );
      }
    }else{
      return (
      <div className="song-display">
        <h1>No song by that name</h1>
      </div>);
    }
    
    
  }

}

export default withRouter(SongDisplay);