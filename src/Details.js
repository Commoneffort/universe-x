import React from "react"
import {PlanetConsumer} from"./Context";
import {NavLink} from "react-router-dom";
import {ButtonContainer} from "./Button";
import styled from 'styled-components';

function Details () {
	
	
    return (
    
    <MyContainer>
        <div class="container">  
             <PlanetConsumer>
      	            {value  =>{
                    const {id, name, img, owner, metal, crystal, gas, battleships, cargoships, colonizers,inGalaxy}=
                    value.PlanetDetail;
        return(
        <div>
            <span className="container-fluid my-3">
            <h2>Planet profile</h2>
                        <p className="font-s mt-3 mb-2">Name: {name}</p>
                        <p className="font-s">metal{metal}, crystal{crystal}, gas{gas}</p>
                        <p className="font-s">battleships{battleships}, cargoships{cargoships}, colonizers{colonizers}</p>          
            
            <img src={img} className="img-fluid mx-auto" style={{width: "30rem", height: "30rem"}} alt="planet"/>

            <MyContainer>
                <div className="media">
            <div className="col-10 mx-auto text-center text-slanted text-black my-5">
            <NavLink to="/Planets">
                <ButtonContainer>back</ButtonContainer>
            </NavLink>
                <ButtonContainer MyNGalaxy
                    disabled={inGalaxy? true:false}
                        onClick={() => {
                        value.addPlanet(id);
                        value.openModal(id);
                        }}
                        >
                        {inGalaxy? "in Galaxy" : "add to galaxy"}
                </ButtonContainer>
                   </div> 
                <MyContainer>
                <h2>Planetary Landscape and Buildings</h2>
                    <div class="btn-group button"><NavLink to="/tasks">Tasks</NavLink></div>
                    <div class="btn-group button"><NavLink to="/sendFleets">Send fleets here</NavLink></div>
                    <div class="btn-group button"><NavLink to="/abandonPlanet">Abandon planet</NavLink></div>
                    <div class="btn-group button" ><NavLink to="/mygalaxy">MY GALAXY</NavLink></div>  
                </MyContainer>  
                </div>
                
            </MyContainer>   
            </span>
        </div>     
                       
                );
                    }}
      
                </PlanetConsumer>
           
        </div>
    </MyContainer>
      
    )
}

 
export default Details

const MyContainer = styled.div`
background:green;
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
