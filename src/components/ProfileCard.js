import React from "react";
import Skill from "./Skill";

export default function ProfileCard({
  userName,
  userImage,
  aboutUser,
  skills,
}) {
  return (
    <div className="profile-card">
      <img
        src={userImage}
        alt="Web Developer"
      />
      <h1>{userName}</h1>
      <p>{aboutUser}</p>

      <div className="skills">
        {skills.map((skill) => (
          <Skill
            {...skill}
            key={skill.id}
          />
        ))}
      </div>
    </div>
  );
}
