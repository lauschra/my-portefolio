import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import styled from "styled-components";

const LandingPage = () => {
  return (
      <MainWrapper>
        <HeroSection />
        <ProjectsSection id="work"/>
        <AboutSection id="about" />
      </MainWrapper>
  );
};

export default LandingPage

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color1);
`;

