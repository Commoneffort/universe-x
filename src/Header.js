import React, { Component } from "react";
import {NavLink} from "react-router-dom";

class Header extends Component {
	render() {
    return (
    
        
      <div className="container">
      <div className="hover">
     
        <NavLink to="/"><p class=" title line typing">GalaxEOS</p></NavLink>
    
      </div>
    </div>
    );
  }
}
 
export default Header;

