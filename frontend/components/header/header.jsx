import React from "react";
import {Link} from 'react-router-dom';

class Header extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    if(this.props.currentUser.id){
      return (
        <div className="header">
        <div className="header-top">
          {/* <div className="searchbar">
            <input type="text" defaultValue="Search lyrics and more"/>
          </div> */}
          <div className="logo">
            <Link to="/"><h1>Prodigy</h1></Link>
          </div>
          
          <ul className="session-list">
            <li className="session-button">Hi {this.props.currentUser.username}</li>
            <a className="session-button"><li onClick={() => this.props.logout()}>Logout</li></a>

          </ul> 
        </div>

        <section className="header-bottom">
          <ul>
            <li><Link to="/top/songs">TOP SONGS</Link></li>
            <li>TOP ALBUMS</li>
            <li>TOP ARTISTS</li>
            <li> | </li>
            <li><Link to="/new/song">NEW SONG</Link></li>
            <li> | </li>
            <li><a href="https://github.com/JeffreyMJordan">PRODIGY'S CREATOR</a></li>
            <li> | </li>
          </ul>
        </section>
        </div>
      );
    }else{
      return (
        <div className="header">
        <div className="header-top">

          {/* <div className="searchbar-div">
            <input className="searchbar" type="text" defaultValue="Search lyrics and more"/>
          </div> */}

          <div className="logo">
            <Link to="/"><h1>Prodigy</h1></Link>
          </div>

          <ul className="session-list">
            <Link to="/signup"><li className="js-modal-open">Sign Up</li></Link>
            <Link to="/login"><li className="js-modal-open">Sign In</li></Link>
          </ul>
          </div>
          <section className="header-bottom">
          <ul>
          <li><Link to="/top/songs">TOP SONGS</Link></li>
          <li>TOP ALBUMS</li>
          <li>TOP ARTISTS</li>
          <li> | </li>
            <li><a href="https://github.com/JeffreyMJordan">PRODIGY'S CREATOR</a></li>
          <li> | </li>
          </ul>
        </section>
          
          
        
        </div>
      );
    }
  }
}

export default Header;