import styled from "styled-components";
import { Link } from "react-router-dom";


const Navbar = ({handleClick}) => {
  return (
    <WrapperNav>
      <Link to={"./"} className="name">LAURENT <div>SCHRÆNEN</div></Link>
      <ul>
        <li>
        <Link to={"./"}>home</Link>
        </li>
        <li>
         {/* My plan is to make this link back to the Landing Page as well as scrolling to the right section */}
          <a href="#work">work</a>
        </li>
        <li>
          {/* My plan is to make this link back to the Landing Page as well as scrolling to the right section */}
          <a href="#about">about</a>
        </li>
        <li>
          <Link to={"./contact"}>contact</Link>
        </li>
      </ul>
      <ul>
        <li><a target="_blank" href="https://www.instagram.com/laurentschraenen/">insta</a></li>
        <li><a target="_blank" href="https://www.linkedin.com/in/laurent-schraenen-2a9761147/">linkedin</a></li>
        <li><a target="_blank" href="https://github.com/lauschra">github</a></li>
      </ul>
    </WrapperNav>
  );
};

export default Navbar;

const WrapperNav = styled.nav`
  font-size: 1.5rem;
  font-family: Roboto Mono;
  background-color: var(--color2);
  color: var(--color6);
  display:flex;
  justify-content:space-around;
  align-items:end;
  width:100vw;
  & a {
    color: var(--color5);
    text-decoration: none;
  }

  & .name {
    font-family: Lato;
    font-weight: 700;
    font-size: 2.5rem;
  }

  & :hover {
    color: var(--color3);
  }
`;

//I was out of time to work on the responsiveness for this part of the site. My plan is to replace the links for a single button with a pop-up menu for smaller screens.