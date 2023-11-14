import Project from "./Projects/Project";
import styled from "styled-components";
import { projectsData } from "../../../assets/projectsData"; //made a data file for projects for easy updating when I'll have new projects.

const ProjectsSection = () => {
  return (
    <ProjectsWrapper id='work'>
      <div>
        <h2>work:</h2>
      </div>
      {projectsData.map((project) => {
        return <Project
          key={project.id}
          imageSource={project.imageSource}
          projectName={project.name}
          projetDescription={project.description}
          siteLink={project.siteLink}
          codeLink={project.codeLink}
        />;
      })}
    </ProjectsWrapper>
  );
};

export default ProjectsSection;

const ProjectsWrapper = styled.div`
  display: flex;
  border-top: 1px solid var(--color2);
  max-width: 1000px;
  padding-top: 150px;
  margin-bottom: 200px;
  & h2 {
    font-size: 3rem;
    font-family: roboto mono;
  }
  @media only screen and (max-width: 1024px) {
    flex-direction:column;
    margin-bottom: 5vh;
    & h2{
      margin:0 5vw;
    }
}
`;
