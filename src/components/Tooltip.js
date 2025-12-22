
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
   {next && <div className="tooltiptext">{text}</div>}
    <p className="tooltip" 
    onMouseEnter={()=> setNext(true)} onMouseLeave={()=> setNext(false)}>
     <div> Hover over me to see another tooltip </div>
      
      </p>
   
      
  </div>)
}

export default Tooltip