import React, {Component}  from "react"
import styled from "styled-components";
import {PlanetConsumer} from "./Context";
import {NavLink,} from "react-router-dom";
import PropTypes from 'prop-types';



export default class PlanetCard extends Component {
render () {

const {id, name, img, owner, metal, crystal, gas, battleships, cargoships, colonizers,inGalaxy} = this.props.planet;
    return (
  
    <PlanetWrapper className="col-10  mx-auto col-md-3 col-lg-4 my-3">
      
        <div className = "card">
            <PlanetConsumer>
            {value=>(
        	    <div className = "images-container p-2 " 
        	    onClick={()=> value.handleDetail(id)}
        	    >       	
      			<div className="card-flex ">
      			
      			    <p className="align-self-center mb-10 card-text">
      			    {owner}
      			    </p>
                </div>
        	
      			
      		<button 
      			className="add-btn" 
      			disabled={inGalaxy ? true : false} 
      			onClick={()=>{
      				value.addPlanet(id);
					value.openModal(id);
						}}
      			>
      		{inGalaxy?(
      			<NavLink to = "/mygalaxy">
      			<p className="text-capitalize mb-0" disabled>
      			{" "}
      			expanded view
      			</p></NavLink>
      			):(
      			<i className="fas fa-plus" />
						)}
      		</button>
					</div>)}
					</PlanetConsumer>
      	
     	
      	
     
      {/* card footer */}
      <NavLink to = "/Details">
      <div className="card-footer d-flex justify-content-between">
      	
        		<img src = {img} width="90" height="90" alt = "planet" 
        		className= "card-images-to s"/>
      		
      		<div>
      			<h3 className="align-self-left mb-0">
      				{name}
      			</h3>
      			<div className="card-flex justify-content-between">
      				<p className="align-self-left mb-10">
      				{owner}
      				<p className="font-italic mb-1">
      				<span className="mr-1"></span>
      				{metal}, {crystal}, {gas}
      				</p>
                    <p className="font-italic mb-1">
      				<span className="mr-1"></span>
      				{battleships}, {cargoships}, {colonizers}
      				</p>
      			</p>
                  
      			</div>
      		</div>
      
      	</div>
      	</NavLink>
      </div>
      
    </PlanetWrapper>
  
    );
  }
}

PlanetCard.propTypes = {
planet:PropTypes.shape({
	id:PropTypes.number,
	img:PropTypes.string,
	name:PropTypes.string,
	metal:PropTypes.number,
	crystal:PropTypes.number,
	gas:PropTypes.number,
	inGalaxy:PropTypes.bool
}).isRequired

}

const PlanetWrapper = styled.div`

.card{
	border-color:transparent;
	transition:all 0.5s linear;
	box-shadow:6px 6px 6px 0px rgba(1,0,0,0.2);
	color:black;
	
}
.card-footer{
	border-color:transparent;
	color: black;
	background-color:white;
	transition:all 0.5s linear;
	
}
&:hover{
	.card{
	box-shadow:2px 2px 5px 0px rgba(2,0,0,0.2)
}
	.card-footer {
	background: rgba(250,250,250);
	}}
	
.images-container{
	position:relative;
	overflow:hidden;
	
	}	
.card-images-top{
	transition: all 1s linear;
}
.images-container:hover .card-img-top{
	transform:scale(1.2);
	
	}

.add-btn{
	position:absolute;
	bottom:0;
	right:0;
	
	background:var(--lightGreen);
	border:none;
	color: var(--mainWhite);
	transform:translate(100%,100%);
	transition:all 0.5s linear;
}
.images-container:hover .add-btn {
	transform: translate(0,0);
	
}
img{
	border-radius:50%
}


.add-btn:hover{
	background:var(--mainWhite);
	
	color: var(--lightGreen);
	cursor:pointer;}
	

`;



