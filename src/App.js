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
import { useState } from 'react';
import Footer from './components/Footer';


const themes = {
  light : lightTheme,
  dark : darkTheme,

}
const Body = styled.div`
background-color: ${({theme}) => theme.bg};
width: 100%;
height: 100%;
overflow-x: hidden;
`;

const Wrapper = styled.div`
 background: ${({ theme }) => theme.wrapperbg};
 background: ${({ theme }) => theme.wrapperbg_secondary};
width: 100%;
clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%;

`;

function App() {

  const [theme, setTheme] = useState("dark")
  return (
    <ThemeProvider theme={themes[theme]}> 
      <Router>
      <Navbar  theme={theme} setTheme={setTheme}/>
      <Body>
        <Hero theme={theme} setTheme={setTheme}/>
        
        <Wrapper>
          <Skills theme={theme} setTheme={setTheme} />
        
        <Projects theme={theme} setTheme={setTheme}/>
        
          <Education theme={theme} setTheme={setTheme}/>
          </Wrapper>
          <Footer theme={theme} setTheme={setTheme}/>
      </Body>
      </Router>
    </ThemeProvider>
  );
};

export default App;

