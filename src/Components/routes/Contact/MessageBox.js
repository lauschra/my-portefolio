import styled from "styled-components"

//This does nothing for now. It will eventually be able to send an email to myself with the inputs infos.
const MessageBox = () => {
  return <BoxWrapper>
      <p style={{margin: "0px"}}>name: <input></input></p>
      <p>email: <input></input></p>
      <p>message: </p>
      <textarea></textarea>
      {/* send button missing here */}
    </BoxWrapper>
}

export default MessageBox

const BoxWrapper = styled.div`
  border: 3px solid var(--color3);
  border-radius: 5px;
  background-color: var(--color2);
  padding: 60px;
  max-width: 500px;
  & > p {
    margin: 0;
  }
  & input {
    width: 100%;
  }
  & textarea{
    width: 100%;
    height: 10rem;
  }
  @media only screen and (max-width: 1000px) {
    margin:0;
}
`