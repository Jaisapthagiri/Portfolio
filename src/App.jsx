import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from './utils/Themes'
import Navbar from "./components/Navbar/index";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection/index";
import Skills from "./components/Skills/index";
import Projects from "./components/Projects/index";
import Contact from "./components/Contact/index";
import Footer from "./components/Footer/index";
import Education from "./components/Education/index";
import ProjectDetails from "./components/ProjectDetails/index";
import styled from "styled-components";
import Certification from "./components/Certification/index";
import Snowfall from 'react-snowfall';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <>
      <Snowfall
        snowflakeCount={100}
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          zIndex: 9999,
          pointerEvents: 'none',
        }}
      />
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Router >
          <Navbar />
          <Body>
            <HeroSection />
            <Wrapper>
              <Skills />
            </Wrapper>
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
            <Wrapper>
              <Education />
              <Certification />
              <Contact />
            </Wrapper>
            <Footer />
            {openModal.state &&
              <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
            }
          </Body>
        </Router>
      </ThemeProvider >
    </>
  );
}

export default App;
