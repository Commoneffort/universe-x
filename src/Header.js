import React, { Component } from "react";
import {NavLink} from "react-router-dom";

class Header extends Component {
	render() {
    return (
    
           
        <div className="container">
        	<div className="hover">
         
            <NavLink to="/"><p class="line typing"><h1 class="title">GalaxEOS</h1></p></NavLink>
        
        	</div>
        </div>
    );
  }
}
 
export default Header;

