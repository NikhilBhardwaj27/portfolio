import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { Link } from "react-scroll";

const CollapseMenu = (props) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200],
            })
            .interpolate((openValue) => `translate3d(0, ${openValue}px, 0`),
        }}
      >
        <NavLinks>
          <li>
            <Link
              to="home"
              smooth={true}
              offset={50}
              onClick={props.handleNavbar}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="project"
              smooth={true}
              offset={50}
              onClick={props.handleNavbar}
            >
              Project Work
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              offset={50}
              onClick={props.handleNavbar}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              offset={50}
              onClick={props.handleNavbar}
            >
              Contact
            </Link>
          </li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

const CollapseWrapper = styled(animated.div)`
  background: #ffff;
  position: fixed;
  top: 4.5rem;
  z-index: 1;
  left: 0;
  right: 0;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: #777;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #0080ff;
      border-bottom: 1px solid #0080ff;
    }
  }
`;

export default CollapseMenu;
