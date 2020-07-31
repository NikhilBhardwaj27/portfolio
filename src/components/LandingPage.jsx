import React from "react";
import styled from "styled-components";
import landing from "../assets/landing.gif";
import "../App.css";
import Swing from "react-reveal/Swing";
import Typewriter from "typewriter-effect";

const LandingPage = () => {
  return (
    <div id="home">
      <Landing>
        <Container1>
          <h4>
            <Typewriter
              options={{
                strings: [
                  "Hello My Name is  Nikhil Bhardwaj",
                  "I am a full Stack developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h4>
        </Container1>

        <Container2>
          <a href={require("../assets/MyCv.pdf")}>
            <Button> Download CV</Button>
          </a>
          <Swing>
            <Image src={landing} alt="image"></Image>
          </Swing>
        </Container2>
      </Landing>
    </div>
  );
};

const Landing = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 10%;
  margin-right: 10%;
  justify-content: space-between;
`;

const Image = styled.img`
  margin: 2%;
  justify-content: stretch;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Container1 = styled.div`
  margin-top: 150px;
  h4 {
    font-size: 30px;
    font-family: Verdana;
    color: #777;
    margin-top: 30px;
  }
  @media (max-width: 768px) {
    margin-top: 50px;
    text-align: center;
  }
`;

const Container2 = styled.div`
  margin-top: 100px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Button = styled.button`
  background: none;
  padding: 10px;
  margin: 20px;
  border-radius: 5px;
  color: grey;
  font-size: 16px;
  border: 2px solid #0080ff;
  cursor: pointer;

  &:hover {
    background: #0080ff;
    color: white;
  }
`;

export default LandingPage;
