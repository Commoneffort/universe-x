import React from "react"

function Title ({name,title}) {
    return (
    
          <div className="col-4  my-2 text-title ">
             <div className="font-xl ">
                <h1 className="text-capitalize ">
                {name} 
                <div className="text-black">{title}</div>
                </h1>
            </div>
         </div>

    )
  }

 
export default Title