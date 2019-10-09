import React, { Component } from "react";
import {NavLink} from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  render() {
    return (
    
      <nav>
        <div className="navbar">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/howto">How To Play</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/planets">Play</NavLink></li>
          </div>      
        <NavLink to="/"><p class=" title line typing">GalaxEOS</p></NavLink> 
    </nav>
    );
  }
}
 


