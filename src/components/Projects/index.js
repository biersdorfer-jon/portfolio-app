import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProjectsCard from '../Cards/ProjectsCard';
import { projects } from '../../data/constants';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Container = styled.div`
background: transparent;
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
padding-top: 10px;
padding-bottom: 40px
`;

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1350px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

const Title = styled.div`
font-size: 42px;
font-weight: 600;
color: ${({ theme }) => theme.text_primary};
text-align: center;
margin-top: 20px;


@media (max-width: 768px) {
  margin-top: 12px;
  font-size: 32px;
}
`;

const Description = styled.div`
  font-size: 18px;
  max-width: 600px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size 16px;
  }

`;

const ToggleGroup =styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 12px;
  font-weight: 500;
  margin: 22px 0;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ToggleButton =styled.div`
  padding: 8px 18px;
  cursor: pointer;
  color: ${({ theme }) => theme.text_primary};

  ${({ active, theme }) => 
        active && 
`
        background-color: ${theme.primary+ 30};
        

    `}

    &:hover {
        background-color: ${({ theme }) => theme.primary + 30};
        color: ${({ theme }) => theme.primary};
    }

    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`;

const Divider = styled.div`
background-color: ${({ theme }) => theme.primary};
width: 2.5px;
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
`;

const Projects = () => {
  const [toggle, setToggle] = useState("all");

  gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
      const animateElements = (startPoint, endPoint) => {
        
        gsap.fromTo(
          '.projectSection', // Target element or class
        {
          opacity: 0,
          transform: 'translateX(-600px)', // Optional: Set the initial transform for animation
        },
        {
          opacity: 1,
          transform: 'translateX(0)', // Optional: Set the final transform for animation
          duration: 5,
          scrollTrigger: {
            trigger: '.projectSection',
            start: startPoint, // Adjust the start position as needed
          end: endPoint,  // Adjust the end position as needed
            scrub: 1, // Adjust the scrub value for smoother animation
            toggleActions: 'play none none none', // Adjust toggle actions as needed
          },
        }
        );

        gsap.fromTo(
          '.project', // Target element or class
        {
          opacity: 0,
          transform: 'translateY(60px)', // Optional: Set the initial transform for animation
        },
        {
          opacity: 1,
          transform: 'translateX(0)', // Optional: Set the final transform for animation
          duration: 5,
          scrollTrigger: {
            trigger: '.project',
            start: startPoint, // Adjust the start position as needed
          end: endPoint,  // Adjust the end position as needed
            scrub: 1, // Adjust the scrub value for smoother animation
            toggleActions: 'play none none none', // Adjust toggle actions as needed
          },
        }
        );
      };
  
      // Media query for screens with a maximum width of 500px
      const mediaQuery500 = window.matchMedia('(max-width: 500px)');
      if (mediaQuery500.matches) {
        animateElements('top 100%', 'top 80%');
      }
  
      // Media query for screens with a minimum width of 501px
      const mediaQuery501 = window.matchMedia('(min-width: 501px)');
      if (mediaQuery501.matches) {
        animateElements('top 90%', 'bottom 80%');
      }
  
      // Event listener for changes in media query status
      const handleMediaQueryChange = (event) => {
        if (event.matches) {
          // Media query matches, apply animations
          animateElements('top 100%', 'top 80%');
        } else {
          animateElements('top 90%', 'bottom 100%');
        }
      };
  
      // Add event listener for media query changes
      mediaQuery500.addListener(handleMediaQueryChange);
      mediaQuery501.addListener(handleMediaQueryChange);
  
      // Clean up event listeners on component unmount
      return () => {
        mediaQuery500.removeListener(handleMediaQueryChange);
        mediaQuery501.removeListener(handleMediaQueryChange);
      };
    }, []);

  return (
    
    <Container id="projects">
        <Wrapper>
            <Title className='projectSection'>Projects</Title>
            <Description className='projectSection'>Here are some of my projects I have completed or are currently working on.</Description>
            
            <ToggleGroup className='project'>
              {toggle === "all" ? (
                <ToggleButton active value="all" onClick={() => setToggle('all')}>
                  ALL
                  </ToggleButton>
              ) : (<ToggleButton value="all" onClick={() => setToggle('all')}>ALL</ToggleButton>
              )}
                <Divider />
                {toggle === "frontend" ? (
                <ToggleButton active onClick={() => setToggle('frontend')}>
                  FRONTEND
                  </ToggleButton>
                ) : (<ToggleButton value="frontend" onClick={() => setToggle('frontend')}>FRONTEND</ToggleButton>
                )}
                <Divider />
                {toggle === "backend" ? (
                <ToggleButton active onClick={() => setToggle('backend')}>
                  BACKEND
                  </ToggleButton>
                ) : (<ToggleButton value="backend" onClick={() => setToggle('backend')}>BACKEND</ToggleButton>
                )}
                <Divider />
                {toggle === "design" ? (
                <ToggleButton active onClick={() => setToggle('design')}>
                  DESIGN
                  </ToggleButton>
                ) : (<ToggleButton value="design" onClick={() => setToggle('design')}>DESIGN</ToggleButton>
                )}
            </ToggleGroup>

            <CardContainer className='project'>
  {toggle === "all" 
    ? projects.map((project) => (
        <ProjectsCard key={project.id} project={project} />
      ))
    : projects
        .filter((item) => item.category === toggle)
        .map((project) => (
          <ProjectsCard key={project.id} project={project} />
        ))}
</CardContainer>
        </Wrapper>
    </Container>
  )
}

export default Projects