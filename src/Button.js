import React from "react"
import styled from "styled-components";
 
export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1rem;
background: transparent;
border: 0.05rem solid black;
color: ${prop => prop.MyGalaxy ? "white" : "white"};
border-radius:0.2rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
font-size: 16px;
border-color:white;
margin-left:20px;

&:hover {
	background: ${prop => prop.MyGalaxy ? "black" : "white"};
	color: black;
}
&:focus {
	outline:none;
}

`;

