import React from "react";

class ReferentForm extends React.Component{
  constructor(props){
    super(props);
    console.log(props);
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
      <button onClick={this.handleClick}>Create Referent</button>
    );
  }
}

export default ReferentForm;