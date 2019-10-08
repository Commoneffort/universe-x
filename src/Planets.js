import React, {Component}  from "react"
import PlanetCard from "./PlanetCard"
import Title from "./Title"
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
  
    
      <div>
       <React.Fragment>
           
       <Title  title="Smart Contract Game"/> 
           <div className="card-container"> 
                      <PlanetWrapper className=" col-20 mx-auto  "> 
                         
      			        <PlanetConsumer>
      			            {value => {
      			            return value.planets.map(planet => {
      				        return <PlanetCard  key={planet.id} planet={planet}/>;
      			                });
      			            }}
      			        </PlanetConsumer>
                          </PlanetWrapper>	
                          </div>
                        
            
      	</React.Fragment>
      </div>
    );
    
  }
}
const PlanetWrapper = styled.div`
.content
    backgroundColor:white;
    background: rgba(250,250,250);

}
`
