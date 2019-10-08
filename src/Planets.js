import React, {Component}  from "react"
import PlanetCard from "./PlanetCard"
import Title from "./Title"
import {PlanetConsumer} from "./Context"
import {PlanetsData} from "./PlanetsData"
import styled from 'styled-components';

export default class Planets extends Component {
	state = {
	planets:PlanetsData
	};
	render() {
	
    return (
  
    
      <div>
       <React.Fragment>
           <div className="py-5">
       	        <div className="container">
      		        <Title  title="GalaxEOS - Smart Contract Game"/>    
      			        <PlanetConsumer>
      			            {value => {
      			            return value.planets.map(planet => {
      				        return <PlanetCard  key={planet.id} planet={planet}/>;
      			                });
      			            }}
      			        </PlanetConsumer>
      		    </div>
      		</div>	
      	</React.Fragment>
      </div>
    );
    
  }
}
const TabContainer = styled.div``