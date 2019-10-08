import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Home from "./Home";
  import HowTo from "./HowTo";
  import Login from "./Login";
  import Header from "./Header";


class Main extends Component {

  render() {

    return (
        
        <HashRouter>
            <div>
      <div className="header">  
          <ul>
          	<div className="nav">
                <li><NavLink exact to="/"><div class="pulse wrapper down"></div></NavLink></li>
                <li><NavLink to="/howto">How To Play</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </div>
            <Header />
              
          </ul>
        </div>
        <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/howto" component={HowTo}/>
            <Route path="/login" component={Login}/>
        </div>           
            </div>
        </HashRouter>
   
    );
  }
}
 
export default Main;

