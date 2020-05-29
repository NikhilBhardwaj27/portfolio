import React from 'react'
import styled from 'styled-components'
import Zoom from 'react-reveal/Zoom';
import code from '../assets/code.png'
import '../App.css'
import Swing from 'react-reveal/Swing';

const LandingPage = () => {
    return (
        <div id="home">
            <Landing>
                <Container1>    

                    <Zoom left cascade>
                        <h4>Hi I am</h4>
                        <h1>Nikhil <Span>Bhardwaj</Span></h1>
                    </Zoom>

                    <Zoom right cascade>
                            <h3>I am a Full Stack Developer</h3>
                    </Zoom>

                    <Button> Download CV</Button>

                </Container1>

                <Container2>
                   <Swing>
                        <Image src={code} alt="image"></Image>
                   </Swing> 
                </Container2>
            </Landing>
        </div>
    )
}

const Landing = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;

    h1{
        font-size:50px;
        font-family:Verdana;
        color:#777;
        padding:10px;
    }

    h4,h3{
        font-size:20px;  
        font-family:Verdana;
        color:#777;
        padding:10px;
    }

`;

const Image = styled.img`
    margin:2%;
    @media (max-width: 768px) {
        width:90%;
      }
`;

const Container1 = styled.div`
    height:40%;
    widgth:40%;
    margin-top:150px;
    
    @media (max-width: 768px) {
        margin-top:50px;
        text-align:center;
      }
`;

const Container2 = styled.div`
    height:40%;
    widgth:40%;
    margin-top:100px;
    
    @media (max-width: 768px) {
        margin-top:20px;
      }
`;

const Button = styled.button`
      background:none;
      padding:15px;
      margin:20px;
      border-radius:5px;
      color:grey;
      font-size:16px;
      border: 2px solid #fdcb6e;
      cursor:pointer;

      &:hover {
          background:#fdcb6e;
          color:white
      }
`;

const Span = styled.span`
      color:#fdcb6e;

      @media (max-width: 768px) {
        width:100%;
      }
`;
export default LandingPage
