import React from "react";
import {withRouter, Redirect} from "react-router-dom";

class ReferentForm extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    let ref = {};
    ref["start_idx"] = this.props.match.params.startIdx;
    ref["end_idx"] = this.props.match.params.endIdx;
    ref["song_id"] = this.props.song.id;
    if (this.props.currentUser.id){
      ref["creator_id"] = this.props.currentUser.id;
      this.props.createReferent(ref)
      .then((res) => {
        return this.props.history.push(`/songs/${this.props.match.params.songId}/${res.ref.id}/createannotation`);
      });
    }else{
      this.props.history.push(`/login`);
    }
  }

  getOffset(){
    let min = -10;
    if (window.pageYOffset - 400 > min){
      return window.pageYOffset - 400;
    }else{
      return min;
    }
  }

  render(){
    return (
      <div className="fixed" style={{top: this.getOffset()}}>
        <div className="fixed-content">
          <h3 className="fixed-fragment">{this.props.fragment}</h3>
          <a className="new-annotation-button" onClick={this.handleClick}>Start Annotation</a>
        </div>
      </div>
    );
  }
}

export default withRouter(ReferentForm);