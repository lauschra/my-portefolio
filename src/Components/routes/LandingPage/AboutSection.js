import { styled } from "styled-components";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <AboutWrapper id="about">
      <div>
        <h2>about:</h2>
      </div>
      <AboutContainer>
      <img  src="./img/profilepic.jpg"/>
      <div>
        <p>I am a junior full-stack web developer with experience in film making. I am passionate about software technologies, film, music, and video games.</p>
        <p>I value well-structured and efficient code, as well as elegant design.</p>
        <p>I am as comfortable with frontend as I am with backend development.</p>
        <span>Based in Montreal, Canada</span>
        <p>
          <Link to={'./contact'}>{'>contact me<'}</Link>
        </p>
        <p>
          <a href='https://www.linkedin.com/in/laurent-schraenen-2a9761147/' target="_blank">{'>linkedin<'}</a>
        </p>
        <p>
          <a href='https://github.com/lauschra' target="_blank">{'>github<'}</a>
        </p>
      </div>
    </AboutContainer>
    </AboutWrapper>
  );
};

export default AboutSection;

const AboutWrapper = styled.div`
  display: flex;
  border-top: 1px solid var(--color2);
  max-width: 1000px;
  padding-top: 150px;
  margin-bottom:300px;
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

const AboutContainer = styled.div`
  display: flex;
  font-family: Lato;
  font-size:1.5rem;
  margin-left: 50px;
  margin-top: 10rem;

  & img {
    width: 400px;
    border-radius: 5px;
    box-shadow: 0 0 10px 0px var(--color3);
  }

  & div{
    margin: auto;
    margin-left: 20px;
  }

  & a {
    font-family:roboto mono;
    text-decoration: none;
    color: var(--color3);
  }
  & a:hover{
    color: var(--color5);
  }

  & h3 {
    font-weight:800;
  }

  & span{
    font-size:1rem;
  }
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    margin:5vh 5vw;
    & img {
      max-width: 90vw;
    }
}
`