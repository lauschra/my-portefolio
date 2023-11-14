import styled from "styled-components";

const Project = ({imageSource, projectName, projetDescription, siteLink, codeLink}) => {
  return (
    <ProjetWrapper>
      <img src={imageSource} />
      <div>
        <h3>{projectName}</h3>
        <p>{projetDescription}</p>
        <p>
          <a href={siteLink} target="_blank">{'>site link<'}</a>
        </p>
        <p>
          <a href={codeLink} target="_blank">{'>code link<'}</a>
        </p>
      </div>
    </ProjetWrapper>
  );
};

export default Project;

const ProjetWrapper = styled.div`
  display: flex;
  font-family: Lato;
  font-size:1.5rem;
  margin-left: 50px;
  margin-top: 10rem;

  & img {
    max-width: 600px;
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
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    margin: 5vh 5vw;
    & img {
      max-width: 90vw;
    }
}
`