import React from 'react'
import styled from 'styled-components'
import Flip from 'react-reveal/Flip';
import about from '../assets/about.png'
import '../App.css'


const About = () => {

    return (
        <div id="about">
            <AboutSection>
                <Container1>
                    <Flip left>
                        <Image
                            src={about}
                            alt="Image "
                        >
                        </Image>
                    </Flip>
                </Container1>

                <Container2>    
                    <Flip left>
                        <Intro>
                            Hi, My name is Nikhil and I am a Full stack 
                            JavaScript Developer Currently working on MERN stack.
                            I am working in TATA Consultancy Servies as React.js Developer
                            Since 26 August 2019
                        </Intro>
                    </Flip>
                </Container2>
            </AboutSection>
        </div>
    )
}

const AboutSection = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
`;

const Container1 = styled.div`
    margin-top:50px;
    width:50%;
    height:40%;
    @media (max-width: 1300px) {
        margin-top:10px;
        width:100%;
      }
`;

const Container2 = styled.div`
    font-size:30px;
    color:grey;
    margin-top:150px;
    width:40%;
    height:40%;
    @media (max-width: 1300px) {
        margin-top:10px;
        margin-bottom:10px;
        width:90%;
      }
`;

const Intro = styled.div`
    font-size:30px;
    color:grey;
    flex:2;
    line-height:7rem;
`;

const Image = styled.img`
    margin-top:50px;
    @media (max-width: 1300px) {
        margin-top:50px;
        width:100%;
        justify-content:center;
      }
`;

export default About
