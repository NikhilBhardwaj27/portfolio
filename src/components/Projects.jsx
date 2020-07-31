import React from "react";
import styled from "styled-components";
import Rotate from "react-reveal/Rotate";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import expense from "../assets/expense.png";
import social from "../assets/social.png";
import github from "../assets/github.png";
import "../App.css";

const Projects = () => {
  return (
    <div id="project">
      <H1>Projects</H1>
      <Project>
        <Rotate top left>
          <ProjectCards
            title="Expense Manager"
            text="Expense Manager is Mern stack based project to manage expenses.It has JWT authentication"
            href="https://expenses-manager-nik.herokuapp.com/"
            gitty="https://github.com/NikhilBhardwaj27/Expense-Manager"
            src={expense}
          ></ProjectCards>

          <ProjectCards
            title="Social Network App"
            text="MERN stack based app with numerous functionalities like like,comment,follow,unfollow etc."
            href="https://socio-zoo.herokuapp.com/"
            gitty="https://github.com/NikhilBhardwaj27/socio-zoo"
            src={social}
          ></ProjectCards>

          <ProjectCards
            title="Github Profile Search App"
            text="It is a github profile searcher app built with github api and react.js"
            href="https://codesandbox.io/s/github-api-zr01t"
            gitty="https://github.com/NikhilBhardwaj27/GitHubApi"
            src={github}
          ></ProjectCards>
        </Rotate>
      </Project>
    </div>
  );
};

const ProjectCards = (props) => {
  const { title, text, src, href, gitty } = props;
  return (
    <Card className="cards">
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title style={{ fontSize: "30px", padding: "10px" }}>
          {title}
        </Card.Title>
        <Card.Text>{text}</Card.Text>
        <a href={href} style={{ color: "white" }}>
          <Button variant="primary" style={{ margin: "5px" }}>
            View live
          </Button>
        </a>

        <a href={gitty} style={{ color: "white" }}>
          <Button variant="dark">View on Github</Button>
        </a>
      </Card.Body>
    </Card>
  );
};

const Project = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const H1 = styled.h1`
  text-align: center;
  font-size: 50px;
  color: #777;
  margin-bottom: 40px;
`;

export default Projects;
