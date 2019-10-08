import React from "react"
import styled from "styled-components";
 
export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: transparent;
border: 0.05rem solid var(--lightGreen);
color: ${prop => prop.MyGalaxy ? "var(--lightGreen)" : "var(--darkGreen)"};
border-radius:1rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
font-size: 16px;

&:hover {
	background: ${prop => prop.MyGalaxy ? "var(--lightGreen)" : "var(--darkGreen)"};
	color: var(--mainWhite);
}
&:focus {
	outline:none;
}

`;

