
import React from "react";
import './../styles/App.css';

import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
       <Tooltip text="This is a tooltip">
        <p>Hover me</p>
        </Tooltip>


      
    </div>
  )
}

export default App
