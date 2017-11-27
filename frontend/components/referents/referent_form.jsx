import React from "react";
import {withRouter} from "react-router-dom";

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
    ref["creator_id"] = this.props.currentUser.id;
    this.props.createReferent(ref);
  }

  render(){
    return (
      <div className="fixed">
        <h2>Fragment: {this.props.fragment}</h2>
        <button onClick={this.handleClick}>Start Annotation</button>
      </div>
    );
  }
}

export default withRouter(ReferentForm);