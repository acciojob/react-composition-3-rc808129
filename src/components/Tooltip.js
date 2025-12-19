
import React, { useState } from "react";


const Tooltip  = ({text, childern})=>{

  const [show, setShow] = useState(false);
  const [next, setNext] = useState(false)


  return(<div>

    { show && <div className="tooltiptext">{text}</div>}
    <div className="tooltip" onMouseEnter={()=> setShow(true)} onMouseLeave={()=> setShow(false)}>{childern}</div>
   {next && <div className="tooltiptext">{text}</div>}
    <h1 
    onMouseEnter={()=> setNext(true)} onMouseLeave={()=> setNext(false)}>Hover over me to see another tooltip</h1>
   
      
  </div>)
}

export default Tooltip