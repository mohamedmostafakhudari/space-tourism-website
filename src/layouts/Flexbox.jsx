import React from "react";

export default function Flexbox({ children, leftWeight = 1, rightWeight = 1 }) {
  const [left, right] = children;
  return (
    <div className="flex items-center justify-center flex-col md:flex-row">
      <div style={{ flexGrow: leftWeight }}>{left}</div>
      <div style={{ flexGrow: rightWeight }}>{right}</div>
    </div>
  );
}
