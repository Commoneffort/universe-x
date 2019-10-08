import React from "react"
import Title from "./Title"
import GalaxyColumns from "./GalaxyColumns"
import styled from "styled-components"; 

function EmptyGalaxy () {
    return (
    <div class="page-body">
		<div class="body-section">
			<StyledWrapper>
      			<div className="container mt-5">
      				<div className="col-10 mx-auto text center text-title">
      					<h3>You have no planets in your galaxy yet</h3>
      				</div>
      			</div>
      		</StyledWrapper>
      	</div>
      </div>
    )
  }

 
export default EmptyGalaxy

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