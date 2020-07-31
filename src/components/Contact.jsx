import React, { useState } from "react";
import styled from "styled-components";
import ReactCardFlip from "react-card-flip";
import { Form, Button } from "react-bootstrap";
import "../App.css";
import { FaPhone } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { Link } from "react-scroll";

const Contact = () => {
  return (
    <>
      <div id="contact">
        <ContactSection>
          <div className="margin-top">
            <FlipCard></FlipCard>
          </div>
        </ContactSection>
      </div>

      <TopButton>
        <Link to="home" smooth={true} offset={50}>
          Top
        </Link>
      </TopButton>
    </>
  );
};

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <YOUR_FRONT_COMPONENT onClick={(e) => handleClick(e)}>
        <h1>CONTACT ME </h1>
      </YOUR_FRONT_COMPONENT>

      <YOUR_BACK_COMPONENT>
        <ContactBack>
          <FaPhone size={"20px"}></FaPhone>
          <span>9988296271</span>
          <br></br>
          <MdEmail size={"20px"}></MdEmail>
          <span>sharmanikhil65613@gmail.com</span>
          <br></br>
          <MdLocationOn size={"20px"}></MdLocationOn>
          <span>India</span>
          <br></br>
          <ContactForm></ContactForm>
        </ContactBack>
      </YOUR_BACK_COMPONENT>
    </ReactCardFlip>
  );
};

const ContactForm = () => {
  return (
    <Form name="contact" method="post" data-netlify="true">
      <Form.Control type="hidden" form-name="contact" value="contact" />
      <Form.Group name="group" controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="Name"
          className="text-boxes"
          name="user"
        />
        <Form.Control
          type="email"
          placeholder="Email"
          className="text-boxes"
          name="email"
        />
        <Form.Control
          type="text"
          placeholder="Message"
          size="lg"
          className="text-boxes"
          name="message"
        />
      </Form.Group>
      <Button type="submit" style={{ padding: "10px" }}>
        Submit
      </Button>
    </Form>
  );
};

const ContactSection = styled.div`
  display: flex;
  justify-content: center;
`;

const YOUR_FRONT_COMPONENT = styled.div`
  height: 500px;
  width: 500px;
  background-color: #0080ff;

  & h1 {
    color: white;
    font-size: 40px;
    padding-top: 200px;
    transition: all 0.2s ease-in-out;
  }
  & h1:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  @media (max-width: 600px) {
    width: 300px;
  }
`;

const YOUR_BACK_COMPONENT = styled.div`
  height: 500px;
  width: 500px;
  color: white;
  border-radius: 5px;
  background-color: #0080ff;

  & span {
    font-size: 25px;
    padding: 15px;
    @media (max-width: 600px) {
      font-size: 12px;
    }
  }
  @media (max-width: 600px) {
    width: 300px;
  }
`;

const ContactBack = styled.div`
  padding: 50px 0px 50px 0px;
  margin: 0px 20px 0px 20px;
`;

const TopButton = styled.div`
  height: 40px;
  width: 50px;
  background-color: #777;
  border-radius: 4px;
  color: white;
  font-size: 18px;
  position: fixed;
  cursor: pointer;
  bottom: 80px;
  text-align: center;
  z-index: 1;
  padding-top: 7px;
  right: 20px;
`;

export default Contact;
