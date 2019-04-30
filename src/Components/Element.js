import React from "react";

const Element = ({ idx, active, handlerClick, field }) => (
  <div
    className={`element e-${idx} ${active !== "none" ? "e-active" : ""}`}
    onClick={() => handlerClick(field, idx)}
  >
    {active === "cross" ? (
      <span>×</span>
    ) : active === "null" ? (
      <span>O</span>
    ) : (
      ""
    )}
  </div>
);

export default Element;
