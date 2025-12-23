
import React, { useState } from "react";


const Tooltip  = ({text, children})=>{

  const [show, setShow] = useState(false);
  // const [next, setNext] = useState(false)


  return(<div>

    
    <h2 className="tooltip" onMouseEnter={()=> setShow(true)} onMouseLeave={()=> setShow(false)}>
      
      
      <div>{children}
        
          <div> 

            { show && <div className="tooltiptext">{text}</div>}
          </div>
        
         </div>



    </h2>
    {/* <p className="tooltip" 
    onMouseEnter={()=> setNext(true)} onMouseLeave={()=> setNext(false)}>
      <div>
      {children}

          {next && <span className="tooltiptext">{text}</span>}
          </div>

    
       */}
      {/* </p> */}
   
      
  </div>)
}

export default Tooltip