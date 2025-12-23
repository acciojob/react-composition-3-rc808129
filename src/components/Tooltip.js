import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [show, setShow] = useState(false);

  return (
    <div>
    <div
      className="tooltip"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div>
      {children}
      </div>
      {show && <span className="tooltiptext">{text}</span>}
    </div>
    </div>
  );
};

export default Tooltip;
