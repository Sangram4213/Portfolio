import React from "react";
import eCommerceImg from '../../assets/ecommerce.png';
import chatAppImg from '../../assets/ChatApp.jpeg';
import ProjectCard from "../../common/ProjectCard";

const Project = () => {
  return (
    <section id="projects" className="project-container">
      <h1 className="sectionTitle">Project</h1>
      <div className='projectContainer'>
        <ProjectCard src={eCommerceImg} link="https://github.com/Sangram4213/MERN-ECommerce-FrontEnd" h3="eCommerece" p="Shopping App"/>
        <ProjectCard src={chatAppImg} link="https://github.com/Sangram4213/ChatApp" h3="ChatApp" p="Chatting App"/>
      </div>
    </section>
  );
};

export default Project;
