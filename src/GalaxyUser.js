import React from "react"
import styled from 'styled-components';
import {NavLink} from "react-router-dom";


function GalaxyUser ({user,value}) {
    const {id, name, img, owner, metal, crystal, gas, battleships, cargoships, colonizers} = user;
    const{ removeUser} = value;

    return (
    <MyContainer>
      <div className="row my-2 text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-2">
        <NavLink to = "/Details">
        	<img src={img}  style={{width: "5rem", height: "5rem"}}
        	className="img-fluid" alt="planet" />
        	</NavLink>
        </div>
        <div className="col-10 mx-auto col-lg-2">
        	<span className="d-lg-none">planet : </span>
        	{name}
        </div>
        <div className="col-10 mx-auto col-lg-2">
        	<span className="d-lg-none">owner : </span>
        	{owner}
        </div>
        <div className="col-10 mx-auto col-lg-2">
        	<span className="d-lg-none">metal : </span>
        	{metal}
        </div>
        <div className="col-10 mx-auto col-lg-2">
        	<span className="d-lg-none">crystal : </span>
        	{crystal}
        </div>
        <div className="col-10 mx-auto col-lg-2">
        	<span className="d-lg-none">gas: </span>
        	{gas}
        </div>
        <div className="col-10 mx-auto col-lg-2">
        	<span className="d-lg-none">battleship: </span>
        	{battleships}
        </div>
        <div className="col-10 mx-auto col-lg-2">
        	<span className="d-lg-none">cargoship : </span>
        	{cargoships}
        </div>
        <div className="col-10 mx-auto col-lg-2">
        	<span className="d-lg-none">colonizer : </span>
        	{colonizers}
        </div>
        
      	<div className="col-10 mx-auto col-lg-2">
         <div className="cart-icon" onClick={()=> removeUser(id)}>
         <i className="fas fa-trash"></i>
         </div>
         </div>
         
      
     </div>
     </MyContainer>
    );
  }

 
export default GalaxyUser

const MyContainer = styled.div`
img{border-radius:50%}`