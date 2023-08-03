import React from "react";
import PersionalInfo from "./PersionalInfo";
import WorkExperienceDetails from "./WorkExperienceDetails";
import EducationDetails from "./EducationDetails";
import KeySkillsDetails from "./KeySkillsDetails";

const TabContent = ({ activeTab }) => {
  const renderContent = (index) => {
    switch (index) {
      case 0:
        return <PersionalInfo />;
      case 2:
        return <WorkExperienceDetails />;
      case 4:
        return <EducationDetails />;
      case 6:
        return <KeySkillsDetails />;
      default:
        return null;
    }
  };
  return <div>{renderContent(activeTab)}</div>;
};

export default TabContent;
