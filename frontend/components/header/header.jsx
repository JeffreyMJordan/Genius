import React from "react";
import {Link} from 'react-router-dom';

class Header extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    if(this.props.currentUser){
      return (
        <div className="header">
        <div className="header-top">
          <div className="searchbar">
            <input type="text" defaultValue="Search lyrics and more"/>
          </div>
          <div className="logo">
            <Link to="/"><h1>Genius</h1></Link>
          </div>
          
          <ul className="session-list">
            <li>Hi {this.props.currentUser.username}</li>
            <li onClick={() => this.props.logout()}>Logout</li>

          </ul> 
        </div>

        <section className="header-bottom">
          <ul>
            <li>FEATURED STORIES</li>
            <li>TOP SONGS</li>
            <li>VIDEOS</li>
            <li>COMMUNITY</li>
            <li> | </li>
            <li>SHOP</li>
            <li> | </li>
            <li><Link to="/new/song">NEW SONG</Link></li>
            <li> | </li>
          </ul>
        </section>
        </div>
      );
    }else{
      return (
        <div className="header">
        <div className="header-top">

          <div className="searchbar-div">
            <input class="searchbar" type="text" defaultValue="Search lyrics and more"/>
          </div>

          <div className="logo">
            <Link to="/"><h1>Genius</h1></Link>
          </div>

          <ul className="session-list">
            <Link to="/signup"><li className="js-modal-open">Sign Up</li></Link>
            <Link to="/login"><li className="js-modal-open">Sign In</li></Link>
          </ul>
          </div>
          <section className="header-bottom">
          <ul>
            <li>FEATURED STORIES</li>
            <li>TOP SONGS</li>
            <li>VIDEOS</li>
            <li>COMMUNITY</li>
            <li> | </li>
            <li>SHOP</li>
            <li> | </li>
          </ul>
        </section>
          
          
        
        </div>
      );
    }
  }
}

export default Header;