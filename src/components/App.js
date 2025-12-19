
import React from "react";
import './../styles/App.css';

import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Tooltip text="hello world"  childern={<p>hay</p>}/>



      
    </div>
  )
}

export default App
