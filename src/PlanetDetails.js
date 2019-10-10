import React from "react"
import {PlanetConsumer} from"./Context";
import {NavLink} from "react-router-dom";
import {ButtonContainer} from "./Button";
import styled from 'styled-components';
import Flexbox from 'flexbox-react';

function PlanetDetails () {
 
return (
       
    <PlanetConsumer>
    {value  =>{
      const {id, name, img, owner, metal, crystal, gas, battleships, cargoships, colonizers,time, inGalaxy}=
      value.PlanetDetail;
     
    return(
    <MyContainer>
    <div class="wrapper">
        <header class="header"> 
            <h2>PLANET PROFILE</h2>
                <p className="font-s mt-3 mb-2">Name: {name}</p>
                <p className="font-s mt-3 mb-2">Owner: {owner}</p>
                <p className="font-s mt-3 mb-2">Updated: {time}</p>
        </header>
        <article class="main">
            <h3>RESOURCES</h3>
                <p className="font-s">metal{metal}, crystal{crystal}, gas{gas}</p>
            <h3>FLEETS</h3>
                <p className="font-s">battleships{battleships}, cargoships{cargoships}, colonizers{colonizers}</p>          
                <NavLink to="/build"><ButtonContainer>Build</ButtonContainer></NavLink>
        </article>
        <aside class="aside aside-1"><h3>PLANETARY LANDSCAPE AND BUILDINGS</h3>
                <NavLink to="/metalmine"><ButtonContainer>metal Mine </ButtonContainer></NavLink>
                <NavLink to="/crystalmine"><ButtonContainer>crystal Mine </ButtonContainer></NavLink>
                <NavLink to="/gasmine"><ButtonContainer>gas Mine </ButtonContainer></NavLink>  
        </aside>
        <aside class="aside aside-2"><h3>TASKS</h3>
                <NavLink to="/task1"><ButtonContainer>Task 1</ButtonContainer></NavLink>
                <NavLink to="/task2"><ButtonContainer>Task 2</ButtonContainer></NavLink>
                <NavLink to="/task3"><ButtonContainer>Task 3</ButtonContainer></NavLink>
        </aside>
        <footer class="footer"><h2>PLANETARY ACTIONS</h2>
                <NavLink to="/sendfleets"><ButtonContainer>send fleets</ButtonContainer></NavLink>
                <NavLink to="/abandonplanet"><ButtonContainer>abandon planet</ButtonContainer></NavLink>
                <ButtonContainer MyGalaxy
                    disabled={inGalaxy? true:false}
                        onClick={() => {
                        value.addPlanet(id);
                        value.openModal(id);
                        }}
                        >
                        {inGalaxy? "in Galaxy" : "add to galaxy"}
                </ButtonContainer>
        </footer>
       
    </div>
    </MyContainer>
)}}
    </PlanetConsumer>
          
        
      
    )
}

 
export default PlanetDetails

const MyContainer = styled.div`

h2,h3{
    color:white
}
img{
	border-radius:50%;
	
}
	
.active {
  color: white;
  
  }
}
.font-s{
 a{
	color:black;
	text-decoration:none;
}}


a:hover{
	color:white;
	text-decoration:none;

}
a.active {
	color:white;
	text-decoration:none;
}
`
