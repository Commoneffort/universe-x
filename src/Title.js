import React from "react"
import styled from 'styled-components';
 
function Title ({name,title}) {
    return (
    
    
   
      
      
        <div className="row">
          <div className="col-4  my-2 text-title ">
             <div className="font-xl ">
          <h1 className="text-capitalize font-weight-bold ">
          {name} 
          <strong className="text-black">{title}</strong>
          </h1>
       </div>
        </div>
      </div>

    )
  }

 
export default Title