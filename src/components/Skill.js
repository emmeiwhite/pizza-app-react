import React from "react";

export default function Skill({ name, bgColor }) {
  console.log(bgColor);
  return (
    <div
      className="skill"
      style={{ backgroundColor: `${bgColor}` }}
    >
      {name}
    </div>
  );
}
