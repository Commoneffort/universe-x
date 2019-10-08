import React from "react"
import styled from 'styled-components';
import {PlanetConsumer} from "./Context.js";
import {ButtonContainer} from "./Button";
import {NavLink} from "react-router-dom";



function Modal () {
    return (
      <PlanetConsumer>
      {(value) =>{
      const {modalOpen, closeModal} = value;
      const{img,title,name} = value.modalPlanet;
      
      if(!modalOpen){
      return null;
      }
      else{
      	return(
      	<ModalContainer>
			<div claddName="container">
				<div id="modal" 
					className="col-8 mx-auto col-md-6 col-lg-8 
					text-center">
						<h4 className="text-muted">{name}</h4>
						<p>was added to your galaxy</p>
						<img src={img} className="img"
						alt="planet" width="100" height="100"/>
						<h5>{title}</h5>
						
						<NavLink to="/Planets">
                            <ButtonContainer onClick={()=>closeModal()}>
                            Planets
                            </ButtonContainer>
						</NavLink>
						<NavLink to="/mygalaxy">
                            <ButtonContainer MyGalaxy onClick={()=>closeModal()}>
                            My Network
                            </ButtonContainer>
						</NavLink>
				</div>
			</div>
      	</ModalContainer>
      	);
      }
      
      }}
      </PlanetConsumer>
    )
  }

 
export default Modal

const ModalContainer = styled.div`

  	position: fixed;
  	top: 50%;
  	left: 50%;
  	/* bring your own prefixes */
  	transform: translate(-50%, -50%);
	border-radius: 1rem;
	background:var(--mainWhite);
	display:flex;
	align-items:center;
	box-shadow:2px 2px 5px 0px rgba(1,0,0,0.2);
	img{border-radius:50%}
	
	`