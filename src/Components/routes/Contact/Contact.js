import { styled } from "styled-components";
import MessageBox from "./MessageBox";

const Contact = () => {
  return (
    <MainWrapper>
      <ContactWrapper>
        <h2>contact:</h2>
        <ContactContainer>
          <p>
            You can email me at:{" "}
            <a href="mailto:laurent.schraenen@gmail.com">
              laurent.schraenen@gmail.com
            </a>
          </p>
          <p>Or write a message here:</p>
          <MessageBox />
        </ContactContainer>
      </ContactWrapper>
    </MainWrapper>
  );
};

export default Contact;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color1);
`;

const ContactWrapper = styled.div`
  display: flex;
  max-width: 1000px;
  padding-top: 150px;
  margin-bottom: 10px;
  & h2 {
    font-size: 3rem;
    font-family: roboto mono;
  }
  @media only screen and (max-width: 1024px) {
    flex-direction:column;
    & h2{
      margin:0 5vw;
    }
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Lato;
  font-size: 1.5rem;
  margin-left: 50px;
  margin-top: 10rem;
  & a {
    font-family: roboto mono;
    text-decoration: none;
    color: var(--color3);
  }
  & a:hover {
    color: var(--color5);
  }
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    margin:5vh 5vw;
}
`;
