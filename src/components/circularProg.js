import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function circularProg({ skill }) {
  const [progress] = useState(70 + Math.floor(Math.random() * 30));

  return (
    <div className="circleSkillContainer">
      <div className="circularProgress">
        <CircularProgressbar value={progress} text={`${progress}%`} />
      </div>
      <div className="circularProgressSkill">{skill.name}</div>
    </div>
  );
}
