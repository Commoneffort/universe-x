import React, {Component}  from "react"
import {PlanetsData} from "./PlanetsData"
import {PlanetDetail} from "./PlanetsData"


const PlanetContext = React.createContext ();
//Provider
//Consumer

class PlanetProvider extends Component {
        state ={
        planets: [],
        MyGalaxy: [],
        PlanetDetail:[],
        modalOpen:false,
        modalPlanet:[],
        };
        
        componentDidMount(){
        this.setPlanets();
        }

    setPlanets = ()=>{
        let tempPlanets = [];
        PlanetsData.forEach(user=>{
            const singleUser = {...user};
        tempPlanets = [...tempPlanets,singleUser];
        });
    this.setState(()=>{	
        return {planets:tempPlanets};
        });
};




getUser = id =>{
	const planet = this.state.planets.find(user => user.id ===id);
	return planet;
}

handleDetail = (id) =>{
    const planet = this.getUser(id);
    this.setState(()=>{
        return {PlanetDetail:planet}
    });

};
	
addPlanet = id =>{
	let tempPlanets = [...this.state.planets];
	const index = tempPlanets.indexOf(this.getUser(id));
	const planet = tempPlanets[index];
	planet.inGalaxy = true;
	planet.count = 1;
	
this.setState(()=>{
    return {planets: tempPlanets, MyGalaxy:[...this.state.MyGalaxy, planet]}
},
() => {console.log(this.state);}
);	
};

openModal = id =>{
	const planet = this.getUser(id);
	this.setState(()=>{
	    return{modalPlanet: planet, modalOpen: true}
	})
}

closeModal = () =>{
this.setState(()=>{
	return{modalOpen:false}
	})
}

removeUser = (id) =>{
	let tempPlanets = [...this.state.planets];
	let tempGalaxy = [...this.state.MyGalaxy];
	
	
    tempGalaxy = tempGalaxy.filter(user => user.id !== id);

        const index = tempPlanets.indexOf(this.getUser());
        let removedPlanet = tempPlanets[index];
        removedPlanet.inGalaxy= false;
        removedPlanet.count = 0;

    this.setState(()=>{
        return{
            MyGalaxy:[...tempGalaxy],
            planets:[...tempPlanets]
        }
    })
}


render() {
	
    return (
    
    
      <PlanetContext.Provider value={{
...this.state,
      handleDetail:this.handleDetail,
      addPlanet: this.addPlanet,
      openModal: this.openModal,
      closeModal: this.closeModal,
      removeUser: this.removeUser,
      
      }}
      >
      
      	{this.props.children}
      </PlanetContext.Provider>
    );
    
    
  }
  }

const PlanetConsumer = PlanetContext.Consumer;

export {PlanetProvider, PlanetConsumer};