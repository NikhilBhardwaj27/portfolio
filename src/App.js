import React, { Component } from 'react'
import Navbar from './components/navbar/NavBar'
import GlobalStyle from './styles/Global'
import LandingPage from './components/LandingPage.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import './App.css'
import Footer from './components/Footer'


class App extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {
    return (
      <div>
        <Navbar 
          navbarState={this.state.navbarOpen} 
          handleNavbar={this.handleNavbar}></Navbar>
        <GlobalStyle/>
        <LandingPage></LandingPage>
        <Projects></Projects>
        <About></About>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    )
  }
}
export default App
