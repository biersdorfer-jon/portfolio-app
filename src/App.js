import './App.css';
import styled from 'styled-components';
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from './utils/Themes';
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Education from './components/Education';
import Hero from './components/HeroSection';
import Projects from './components/Projects';
import Contact from './components/Contact';


const Body = styled.div`
background-color: ${({theme}) => theme.bg};
width: 100%;
height: 100%;
overflow-x: hidden;
`;

const Wrapper = styled.div`
//  background: linear-gardient (
//    38.73deg,
//    rgba(0, 70, 209, 0) 50%,
//    rgba(0, 70, 209, 0.15) 100%
//  ),

//  linear-gradient(
//    141.27deg,
//    rgba(0, 70, 209, 0) 50%,
//    rgba(0, 70, 209, 0.15) 100%
//  );

background: ${({ theme }) => theme.wrapperbg};
background: ${({ theme }) => theme.wrapperbg_secondary};



width: 100%;
clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%;

`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
      <Navbar />
      <Body>
        <Hero />
        <Wrapper>
          <Skills />
        
        <Projects />
        
          <Education />
          </Wrapper>
      </Body>
      </Router>
    </ThemeProvider>
  );
};

export default App;
