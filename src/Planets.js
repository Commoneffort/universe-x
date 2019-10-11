import React, {Component}  from "react"
import PlanetCard from "./PlanetCard"
import {PlanetConsumer} from "./Context"
import {PlanetsData} from "./PlanetsData"
import styled from "styled-components";

export default class Planets extends Component {
	state = {
	planets:PlanetsData
	};
	render() {
	    console.log(this.state.planets);
    return (

	        <PlanetConsumer>
      			{value => {
      			return value.planets.map(planet => {
      				return <PlanetCard  key={planet.id} planet={planet}/>;
      			         });
      			 }}
      		</PlanetConsumer>
      
    );
    
  }
}
const PlanetWrapper = styled.div`


`
