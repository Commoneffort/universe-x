import React, {Component}  from "react"
import styled from "styled-components";
import {PlanetConsumer} from "./Context";
import {NavLink,} from "react-router-dom";
import PropTypes from 'prop-types';



export default class PlanetCard extends Component {
render () {

const {id, name, img, owner, Y, X, metal, crystal, gas, battleships, cargoships, colonizers,time, inGalaxy} = this.props.planet;
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
      			    {name}
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
      			<p className="card-text mb-0" disabled>
      			{" "}in Galaxy
      			
      			</p></NavLink>
      			):(
                    <i className="fas fa-plus" />
						)}
      		</button>
					</div>)}
					</PlanetConsumer>
      	
     	
      	
     
      {/* card footer */}
      <NavLink to = "/PlanetDetails">
      <div className="card-footer d-flex justify-content-between">
      <img src = {img} width="120" height="120" alt = "planet" 
        		className= "card-images-to s"/>
      		
      		<div>
                
      			
                  <div class="row no-gutters">
                  <p>Updated: </p>
      			    <p className="align-self-left ">
      				{time}
      			    </p>
                  <div class="col-md-10">
                    <p>Owner</p>
      			    <h3 className="align-self-left ">
      				{owner}
      			    </h3>
      				<p>
                    <span className="mr-1"></span>
                      Y {Y},X {X}
                    </p>
                    </div>
                    <div class="col-md-10">
                    <h3>Resources</h3>
                    <p>
      				<span className="mr-1"></span>
      				metal {metal}, crystal {crystal}, gas {gas}
      				</p>
                      </div>
                      <div class="col-md-10">
                    <h3>Fleet</h3>
                    <p>
      				<span className="mr-1"></span>
      				battleships {battleships}, cargoships {cargoships}, colonizers {colonizers}
      				</p>
                      </div>
                     
   
                     
                  
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
    owner:PropTypes.string,
    Y:PropTypes.number,
    X:PropTypes.number,
	metal:PropTypes.number,
	crystal:PropTypes.number,
    gas:PropTypes.number,
    time:PropTypes.number,
	inGalaxy:PropTypes.bool
}).isRequired

}

const PlanetWrapper = styled.div`

.card{

    
	transition:all 0.5s linear;
    box-shadow:6px 6px 6px 0px rgba(1,0,0,0.2);
    border:0;
    background: rgba(230,124,230,1);
    background: -moz-linear-gradient(45deg, rgba(230,124,230,1) 0%, rgba(130,18,130,1) 26%, rgba(0,0,0,1) 78%, rgba(0,0,0,1) 100%);
    background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(230,124,230,1)), color-stop(26%, rgba(130,18,130,1)), color-stop(78%, rgba(0,0,0,1)), color-stop(100%, rgba(0,0,0,1)));
    background: -webkit-linear-gradient(45deg, rgba(230,124,230,1) 0%, rgba(130,18,130,1) 26%, rgba(0,0,0,1) 78%, rgba(0,0,0,1) 100%);
    background: -o-linear-gradient(45deg, rgba(230,124,230,1) 0%, rgba(130,18,130,1) 26%, rgba(0,0,0,1) 78%, rgba(0,0,0,1) 100%);
    background: -ms-linear-gradient(45deg, rgba(230,124,230,1) 0%, rgba(130,18,130,1) 26%, rgba(0,0,0,1) 78%, rgba(0,0,0,1) 100%);
    background: linear-gradient(45deg, rgba(230,124,230,1) 0%, rgba(130,18,130,1) 26%, rgba(0,0,0,1) 78%, rgba(0,0,0,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e67ce6', endColorstr='#000000', GradientType=1 );
	
    border-style:solid;
    border-color:white;
    border-width:0.5px;
    border-radius:1rem;
}

.card-text
{
    color:white;
    font-size:1.7rem;
    font-family: Oswald, sans-serif;
    
}
.card-footer{
	color: white;
    background-color:black;
    border-style:solid;
    border-color:white;
    border-width:0.5px;
    border-bottom-radius:1rem;
	
}
&:hover{
	.card-footer {
    background: rgba(254,250,250);
    color:black;
    transition:all 0.5s linear;
    box-shadow:8px 8px 8px 2px rgba(1,0,0,0.2);
    text-decoration:none;
    }
}

.images-container{
	position:relative;
    overflow:hidden;
	
	}	
.card-images-top{
	transition: all 2s linear;
}
.images-container:hover .card-img-top{
	transform:scale(1.2);
	
	}

.add-btn{
	position:absolute;
	bottom:0px;
	right:0px;
	background:white;
	border:3;
	color: black;
	transform:translate(100%,100%);
    transition:all 0.2s linear;
    width:100px;
    height:34px;
    font-size:14px;
}
.images-container:hover .add-btn {
	transform: translate(0,0);
	
}
img{
	border-radius:50%
}


.add-btn:hover{
    cursor:pointer;
    text-decoration:none;
}
	

`;



