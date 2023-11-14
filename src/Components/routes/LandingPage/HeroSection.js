import { styled } from "styled-components"

const HeroSection = () => {
  return <HeroWrapper id="hero">
  <p>i do <span>coding</span> stuff for the <span>web</span>,</p>
  <div>
  <span className="using">using these tools:</span>
  <span className="tools">JS, NODE, EXPRESS, REACT, MONGODB</span>
  </div>
  </HeroWrapper>
}

export default HeroSection

const HeroWrapper = styled.div`
  max-width: 1000px;
  margin: 30px auto 0;
  font-family: Roboto Mono;
  color: var(--color5);
  padding-bottom: 200px;
  & p {
    font-size: 10rem;
  }
  & p span {
    color: var(--color3);
  }
  & .using {
    color: var(--color3);
    font-size: 3rem;
    text-align:right;
  }
  & .tools {
    font-family: Lato;
    font-size: 1.5rem;
    color: var(--color5);
  }
  & div{
    display:flex;
    align-items:end;
    justify-content: center;
  }
  @media only screen and (max-width: 1000px) {
    & p {
      font-size: 18vw;
      margin-left:5vw;
    }
}
@media only screen and (max-width: 1024px) {
  margin-left:5vw
}
`