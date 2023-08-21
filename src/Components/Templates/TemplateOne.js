import React from "react";
import { useSelector } from "react-redux";

const TemplateOne = () => {
  //using useSelector hook to access data from redux store
  let updateInfo = useSelector((state) => state.Update_info); //for Personal Info
  let UpdateWork = useSelector((state) => state.Update_work.works || []); //For work Experience
  let updateEducation = useSelector((state) => state.Update_education || []); //for education Details
  let updateSkill = useSelector((state) => state.Update_skill.skills || []); //For skills

  return (
    <div>
      <p>First Name: {updateInfo.firstName}</p>
      <hr />
      <p>University name: {updateEducation.university}</p>
      <hr />
      <ul>
        {updateSkill.map((skill, index) => (
          <li key={index}>skill:{skill.name}</li>
        ))}
      </ul>
      {UpdateWork.map((work, index) => (
        <div key={index}>
          <p>{index + 1}</p>
          <p>Company: {work.company}</p>
          <p>Position: {work.position}</p>
          <p>Start Year: {work.startYear}</p>
          <p>End Year: {work.endYear}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default TemplateOne;
