import React, { Component } from "react";
import Particles from 'react-particles-js';



class Home extends Component {
  render() {
    
    return (
        <div>
        <div class="container">
        <div class="particle-container">
             <Particles 
              params={{
                
                    "particles":{
                    	"number":{
                    		"value":91,
                    		"density":{
                    			"enable":true,
                    			"value_area":801.7060304327614}
                    			},
                    	"color":{
                    	"value":"#ecdcfa"},
                    	"shape":{
                    		"type":"circle",
                    			"stroke":{
                    			"width":2,
                    			"color":"#981c91"},
                    		"polygon":{
                    			"nb_sides":5},
                    			"image":{
                    			"src":"img/github.svg",
                    			"width":100,
                    			"height":100}
                    			},
                    	"opacity":{
                    		"value":0.5,
                    		"random":false,
                    		"anim":{
                    			"enable":false,
                    			"speed":1,
                    			"opacity_min":0.1,
                    			"sync":false}
                    			},
                    		"size":{
                    			"value":3,
                    			"random":true,
                    			"anim":{
                    				"enable":false,
                    				"speed":40,
                    				"size_min":0.1,
                    				"sync":false}
                    				},
                    		"line_linked":{
                    			"enable":true,
                    			"distance":240.5118091298284,
                    			"color":"#ffffff",
                    			"opacity":0.4,"width":1},
                    			"move":{
                    				"enable":true,
                    				"speed":2,
                    				"direction":"none",
                    				"random":false,
                    				"straight":false,
                    				"out_mode":"out",
                    				"bounce":false,
                    				"attract":{
                    					"enable":true,
                    					"rotateX":8337.74271650072,
                    					"rotateY":6974.8424647650245}
                    					}
                    				},
                    			"interactivity":{
                    				"detect_on":"canvas",
                    				"events":{
                    					"onhover":{
                    						"enable":true,
                    						"mode":"grab"},
                    					"onclick":{
                    						"enable":true,
                    						"mode":"bubble"},
                    					"resize":true},
                    					"modes":{
                    						"grab":{
                    							"distance":280.1666382439641,
                    							"line_linked":{
                    								"opacity":0.41953900067455324}
                    								},
                    						"bubble":{
                    							"distance":1339.9274002972195,
                    							"size":3,"duration":0.3,
                    							"opacity":8,"speed":3},
                    						"repulse":{
                    							"distance":200,
                    							"duration":0.4},
                    							"push":{
                    								"particles_nb":4},
                    						"remove":{
                    							"particles_nb":2}
                    								}
                    							},
                    				"retina_detect":true, 
                    
                
            }} />
            </div>
        </div>
        </div>
             );
    }
  
}
 
export default Home;

