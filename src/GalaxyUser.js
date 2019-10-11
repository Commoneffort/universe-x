import React from "react"
import styled from 'styled-components';
import {NavLink} from "react-router-dom";


function GalaxyUser ({user,value}) {
    const {id, name, img, owner, metal, crystal, gas, battleships, cargoships, colonizers} = user;
    const{ removeUser} = value;

    return (
    <MyContainer>
      
       
        <div class="card">
            <div class="card-body">
            <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
        <NavLink to = "/PlanetDetails">
        	<img src={img}  style={{width: "5rem", height: "5rem"}}
        	className="img-fluid" alt="planet" /><p>{name}</p>
        	</NavLink>
        	
        </div>
        <div className="col-10 mx-auto col-lg-2">
        	<p>owner : </p>
        	{owner}
        </div>
        <div className="col-10 mx-auto col-lg-2">
        	<p>metal : </p>
        	{metal}
        	<p>crystal : </p>
        	{crystal}
        	<p>gas: </p>
        	{gas}
        </div>
        <div className="col-10 mx-auto col-lg-2">
        	<p>battleship: </p>
        	{battleships}
        	<p>cargoship : </p>
        	{cargoships}
        	<p>colonizer : </p>
        	{colonizers}
        </div>
        <div className="col-10 mx-auto col-lg-2">
        	<p>expand </p>
        	
        </div>
        
      	<div className="col-10 mx-auto col-lg-2">
         <div className="cart-icon" onClick={()=> removeUser(id)}>
         <i className="fas fa-trash"></i>
         </div>
         </div>
         
         </div>
         </div>
     </div>

    
     </MyContainer>
    );
  }

 
export default GalaxyUser

const MyContainer = styled.div`
position:relative;
font-family:Oswald;
display:block;
padding:10px 0px;
img{
    border-radius:50%
}
p{
    font-size:16px;
}
.card{
    background:white;
	transition:all 0.5s linear;
    box-shadow:8px 8px 8px 2px rgba(1,0,0,0.2);
}
&:hover{
	.card{
    box-shadow:2px 2px 5px 0px rgba(2,0,0,0.2);
    background:#c7c6c6;
}
`