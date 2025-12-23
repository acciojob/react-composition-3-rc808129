import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [show, setShow] = useState(false);
  const [next, setNext] = useState(false);

  return (
    <div>
      {/* First Tooltip */}
      <div
        className="tooltip"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
        {show && <div className="tooltiptext">{text}</div>}
      </div>

      {/* Second Tooltip */}
      <div
        className="tooltip"
        onMouseEnter={() => setNext(true)}
        onMouseLeave={() => setNext(false)}
      >
        Hover over me to see another tooltip
        {next && <div className="tooltiptext">This is a tooltip</div>}
      </div>
    </div>
  );
};

export default Tooltip;
