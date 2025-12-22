
import React from "react";
import './../styles/App.css';

import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
      <Tooltip text="This is heading tooltip">
  <h2>Hover on heading</h2>
</Tooltip>

<Tooltip text="This is paragraph tooltip">
  <p>Hover on paragraph</p>
</Tooltip>



      
    </div>
  )
}

export default App
