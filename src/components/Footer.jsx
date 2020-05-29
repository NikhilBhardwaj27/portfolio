import React, { Component } from 'react'
import styled from 'styled-components'
import {FaInstagram,FaFacebook,FaGithub, FaLinkedin} from 'react-icons/fa'
import { IconContext } from "react-icons";
import '../App.css'


class Footer extends Component {
    render() {
        return (
            <div>
                <FooterSection>
                    <IconContext.Provider value={{style:{marginRight:'10px' ,marginBottom:'10px'}}}>
                        <div>

                            <a href="https://github.com/NikhilBhardwaj27" style={{color:'white'}}>
                            <FaGithub size={"20"} className="github" />
                            </a>

                            <a href="https://www.instagram.com/_nikhil.bhardwaj/" style={{color:'white'}}>
                                <FaInstagram size={"20"} className="instagram" />
                            </a>

                            <a href="https://www.facebook.com/profile.php?id=100009092939562" style={{color:'white'}}>
                                <FaFacebook size={"20"} className="facebook" />
                            </a>
                            
                            <a href="https://www.linkedin.com/feed/" style={{color:'white'}}>
                                <FaLinkedin size={"20"} className="facebook" />
                            </a>
                        </div>
                    </IconContext.Provider>
                    <p style={{marginBottom:'10px'}}>All Copyrights &copy; reserved by Nikhil Bhardwaj</p>
                </FooterSection>
            </div>
        )
    }
}

const FooterSection = styled.div`
    position:fixed;
    left:0;
    bottom:0;
    height:60px;
    padding:10px;
    width:100%;
    background-color:#1c1e1f;
    color:white;
    text-align:center;
`;





export default Footer
