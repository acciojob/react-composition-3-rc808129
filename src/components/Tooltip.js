
import React, { useState } from "react";


const Tooltip  = ({text, childern})=>{

  const [show, setShow] = useState(false);
  const [next, setNext] = useState(false)


  return(<div>

    { show && <div className="tooltiptext">{text}</div>}
    <h2 className="tooltip" onMouseEnter={()=> setShow(true)} onMouseLeave={()=> setShow(false)}>{childern}</h2>
   {next && <div className="tooltiptext">{text}</div>}
    <p className="tooltip" 
    onMouseEnter={()=> setNext(true)} onMouseLeave={()=> setNext(false)}>Hover over me to see another tooltip</p>
   
      
  </div>)
}

export default Tooltip