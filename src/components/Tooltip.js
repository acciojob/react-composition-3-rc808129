
import React, { useState } from "react";


const Tooltip  = ({text, children})=>{

  const [show, setShow] = useState(false);
  const [next, setNext] = useState(false)


  return(<div>

    
    <h2 className="tooltip" onMouseEnter={()=> setShow(true)} onMouseLeave={()=> setShow(false)}>
      
      
      <div>{children}
        
          <div> 

            { show && <div className="tooltiptext">{text}</div>}
          </div>
        
         </div>



    </h2>
    <p className="tooltip" 
    onMouseEnter={()=> setNext(true)} onMouseLeave={()=> setNext(false)}>
      <div>
      Hover over me

          {next && <span className="tooltiptext">This is a tooltip</span>}
          </div>

    
      
      </p>
   
      
  </div>)
}

export default Tooltip