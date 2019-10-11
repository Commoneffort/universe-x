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
       
                
                    <StyledWrapper>
         	
 		                <PlanetConsumer>
                             
         
                        {value =>{
                            const {MyGalaxy} = value;
                            if(MyGalaxy.length>0){
                                return(
                                <React.Fragment>
                                    <Title title="My planets" />
                                    <GalaxyColumns />
                                    <PlanetsList value={value}/>
                                </React.Fragment>
                                );
                            }else{
                                return  <EmptyGalaxy />;
                            }
                            }}
                        </PlanetConsumer>

 		            </StyledWrapper>
                
            
    )
  }

 
export default MyGalaxy


const StyledWrapper = styled.div`
p{
    color:black}
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