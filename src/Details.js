import React from "react"
import {PlanetConsumer} from"./Context";
import {NavLink} from "react-router-dom";
import {ButtonContainer} from "./Button";
import styled from 'styled-components';




function Details () {
	
	
    return (
    

    <MyContainer>
        <div class="page-body">
	        <div class="font-s">
                <PlanetConsumer>
      	            {value  =>{
                    const {id, name, img, owner, metal, crystal, gas, battleships, cargoships, colonizers,inGalaxy}=
                    value.PlanetDetail;
        return(
        <div>
            <h2>User profile</h2>
            
            {/* "+" button adds planet to personal galaxy. If added then toggle to "-"		
                */}
            <h2>+</h2>
            <p>metal</p>
            <p>crystal</p>
            <p>gas</p>
            <p>battleshipsT</p>
            <p>carhoships</p>
            <p>colonizers</p>
            
            
            <div className="container py-5">
                <div className="col-10 mx-auto text-center text-slanted text-black my-5">
                    <h1>{name}</h1>
                </div>
        
                <MyContainer>
                    <div className="col-10 mx-auto col-md-6 my-3 ">
                        <img src={img} className="img-fluid mx-auto" style={{width: "30rem", height: "30rem"}} alt="planet"/>
                            <div class="button my-3 mx-auto" ><NavLink to="/mygalaxy">MY GALAXY</NavLink></div>
                    </div>
                </MyContainer>
                
                    {/* about the planet */}
                    <span className="container-fluid my-3">
                        <h2>Planetary Landscape and Buildings</h2>
                            <h4 className="text-title text-uppercase text-muted mt-3 mb-2"></h4>
                                <p className="text-muted lead">{metal, crystal, gas}</p>

                    
            <div>

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
                    
                <MyContainer>
                    <div class="btn-group button"><NavLink to="/tasks">Tasks</NavLink></div>
                    <div class="btn-group button"><NavLink to="/sendFleets">Send fleets here</NavLink></div>
                    <div class="btn-group button"><NavLink to="/abandonPlanet">Abandon planet</NavLink></div>
                </MyContainer>
                        
        </div>
                              
                        </span>
                        </div>
                        </div>
                       
                );
                    }}
      
                </PlanetConsumer>
            </div>
        </div>
    </MyContainer>
      
    )
}

 
export default Details

const MyContainer = styled.div`

img{
	border-radius:50%;
	
}

.button{
	margin: 0 auto
	
.active {
  color: white;
  
  }
}
.font-s{
 a{
	color:black;
	text-decoration:none;
}}

.font-s{
a:hover{
	color:var(--darkGreen);
	text-decoration:none;

}
a.active {
	color:var(--darkGreen);
	text-decoration:none;
}
`
