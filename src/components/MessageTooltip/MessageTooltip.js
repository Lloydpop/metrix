import React from "react";
import "./Tooltip.css";
const MessageTooltip = ({ children, bg, color, className, time }) => {
  return (
    <div>
      <div
        className="tooltip"
        style={{
          backgroundColor: bg,
          color: color,
        }}
      >
        {children}
      </div>
      <span className={className}>{time}</span>
    </div>
  );
};

export default MessageTooltip;
