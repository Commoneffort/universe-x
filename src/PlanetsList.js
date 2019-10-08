import React from "react"
import GalaxyUser from "./GalaxyUser"
 
function PlanetsList ({value}) 
{
const{MyGalaxy} = value;

    return (
      <div className="container-fluid">
      	{MyGalaxy.map(user=>{
      	return <GalaxyUser key={user.id} user={user} 
      	value={value}/>
      	})}
        
      </div>
    )
  }

 
export default PlanetsList