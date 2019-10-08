import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import HowTo from "./HowTo";
import Login from "./Login";
import Header from "./Header";
import Index from "./index.css";
import Planets from "./Planets";
import MyGalaxy from "./MyGalaxy"
import Details from "./Details"
import Modal from "./Modal"
import Title from "./Title"


class Main extends Component {

  render() {

    return (
        
        <HashRouter>
         <div>
            <div className="header">  
            <ul>
                <div className="nav">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/howto">How To Play</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/planets">Play</NavLink></li>
                </div>
            <Header />
            </ul>
            </div>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/howto" component={HowTo}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/planets" component={Planets}/>
                    <Route path="/mygalaxy" component={MyGalaxy}/>
                    <Route path="/details" component={Details}/>
                </div>
           
            </div> 
        </HashRouter>
   
    );
  }
}
 
export default Main;

