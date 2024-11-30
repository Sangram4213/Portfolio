import React from "react";
import checkMarkIcon from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";

const Skills = () => {
  return (
    <section id="skill" className="skill-container">
      <h1 className="sectionTitle">Skills</h1>
      <div className="skillList">
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="TypeScript" />
        <SkillList src={checkMarkIcon} skill="React" />
        </div>
        <hr />
        <div className="skillList">
        <SkillList src={checkMarkIcon} skill="Nodejs" />
        <SkillList src={checkMarkIcon} skill="Redux" />
        <SkillList src={checkMarkIcon} skill="AWS" />
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="Webpack" /> 
      </div>
      
    </section>
  );
};

export default Skills;
