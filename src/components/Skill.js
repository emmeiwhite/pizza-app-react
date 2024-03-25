import React from "react";

export default function Skill({ name, bgColor, level }) {
  console.log(bgColor);
  return (
    <div
      className="skill"
      style={{ backgroundColor: `${bgColor}` }}
    >
      {name} &nbsp;
      {level === "intermediate" && "👍"}
      {level === "advanced" && "💪"}
    </div>
  );
}
