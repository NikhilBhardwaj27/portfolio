import React from 'react'
import styled from 'styled-components'
import Rotate from 'react-reveal/Rotate'; 
import {Card,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import expense from '../assets/expense.png'
import receipe from '../assets/receipe.png'
import github from '../assets/github.png'
import '../App.css'


const Projects = () => {
    return (
        <div id="project">   
            <H1>My Projects</H1> 
            <Project> 
              <Rotate top left>
                    <ProjectCards 
                    title="Expense Manager" 
                    text="Expense Manager is Mern stack based project to manage expenses.It has JWT authentication"
                    href="https://expense-manager-nik.herokuapp.com/"
                    gitty="https://github.com/NikhilBhardwaj27/Expense-Manager"
                    src={expense}>
                    </ProjectCards>

                    <ProjectCards
                    title="Receipe App" 
                    text="Receipe App fetching external Api to show details of receipe"
                    href="https://codesandbox.io/s/recipe-h6gyg"
                    gitty="https://github.com/NikhilBhardwaj27/ReciepeApp"
                    src={receipe}>
                    </ProjectCards>

                    <ProjectCards
                    title="Github Profile Search App" 
                    text="It is a github profile searcher app built with github api and react.js" 
                    href="https://codesandbox.io/s/github-api-zr01t"
                    gitty="https://github.com/NikhilBhardwaj27/GitHubApi"
                    src={github}
                    >
                    </ProjectCards>

              </Rotate>
            </Project>
        </div>
    )
}

const ProjectCards = (props) => {
  const {title,text,src,href,gitty} = props
  return (  
      <Card className="cards">
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title style={{fontSize:'30px',padding:'10px'}}>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary" style={{margin:'5px'}}>
          <a href={href} style={{color:'white'}}>
            View live
          </a>
        </Button>
        
        <Button variant="dark">
          <a href={gitty} style={{color:'white'}}>
            View on Github</a>
        </Button>
      </Card.Body>
    </Card>
  )
}

const Project = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
`;


const H1 = styled.h1`
  text-align:center;
  font-size:50px;
  padding-bottom:4%;
`;


export default Projects
