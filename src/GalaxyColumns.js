import React from "react"
 
function GalaxyColumns () {
    return (
      <div className="container-fluid text-center d-none d-lg-block">
      	<div className="row">
      		<div className="col-10 mx-auto col-lg-2">
      			<p className="text-uppercase">Planet</p>
      		</div>
      		<div className="col-10 mx-auto col-lg-2">
      			<p className="text-uppercase">Name</p>
      		</div>
      		<div className="col-10 mx-auto col-lg-2">
      			<p className="text-uppercase">Resources
      			</p>
      		</div>
      		<div className="col-10 mx-auto col-lg-2">
      			<p className="text-uppercase">Fleet</p>
      		</div>
      		<div className="col-10 mx-auto col-lg-2">
      			<p className="text-uppercase">Expand</p>
      		</div>
      	
      		<div className="col-10 mx-auto col-lg-2">
      			<p className="text-uppercase">Remove</p>
      		</div>
      	</div>
    </div>
    
    )
  }

 
export default GalaxyColumns