import React from "react"
import Title from "./Title"
import {NavLink} from "react-router-dom";
import GalaxyColumns from "./GalaxyColumns"
import EmptyGalaxy from "./EmptyGalaxy"
import {PlanetConsumer} from "./Context"
import PlanetsList from "./PlanetsList"
import styled from 'styled-components';

function MyGalaxy () {
    return (
      <div class="page-body">
      <div class="body-section">
		<StyledWrapper>
         
         	<div class="btn-group button"><NavLink to="/mygalaxy">MY GALAXY</NavLink></div>
        
         	
 		<PlanetConsumer>
         
         {value =>{
         	const {MyGalaxy} = value;
         	if(MyGalaxy.length>0){
         		return(
         		<React.Fragment>
         			<Title title="My planets" />
      				<NetworkColumns />
      				<PlanetsList value={value}/>
      			</React.Fragment>
         		);
         	}else{
         		return  <EmptyGalaxy />;
         	}
         	}}
         </PlanetConsumer>
 		</StyledWrapper>
 		</div>
	</div>
    )
  }

 
export default MyGalaxy


const StyledWrapper = styled.div`

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