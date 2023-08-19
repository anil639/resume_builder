import React from "react";
import { useSelector } from "react-redux";

const TemplateOne = () => {
  //using useSelector hook to access data from redux store
  let updateInfo = useSelector((state) => state.Update_info);
  let UpdateWork = useSelector((state) => state.Update_work.works || []);

  return (
    <div>
      <p>First Name: {updateInfo.firstName}</p>
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
