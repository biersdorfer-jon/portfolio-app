import React, {useEffect} from 'react';
import styled from 'styled-components';
import { skills } from '../../data/constants';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
padding-top: 60px;
background: #854CE6B3;
padding-bottom: 80px;
`;

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1300px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`;

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

const SkillsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: center;
  gap: 30px;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: ${({ theme }) => theme.skill};
  border: 0.1px solid #6C33CD;
  border-radius: 16px;
  padding: 16px 36px;
  transition: 0.2s ease-in-out;

  &:hover {
    transition: 0.2s ease-in-out;
    transform: translateY(-10px);
    transform: scale(1.05);
    filter: brightness(${({ theme }) => theme.brightness});
  }

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }

  @media (max-width: 500px) {
    max-width: 300px;
    padding: 10px 36px;
  }
`;

const SkillTitle =styled.h2`
font-size: 28px;
font-weight: 600;
color: ${({ theme }) => theme.text_secondary};
margin-bottom: 20px;
text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-bottom: 28px;
`;

const SkillItem = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 14px;
  font-weight: 400;

  &:hover {
    transition: 0.2s ease-in-out;
    transform: translateY(-10px);
    transform: scale(1.04);
    box-shadow: 0px 0px 15px 2px rgba(224,224,224,1);

  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }

  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  `;

const Skills = () => { 

  gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
      const animateElements = (startPoint, endPoint) => {
        
        gsap.fromTo(
          '.skillSection', // Target element or class
        {
          opacity: 0,
          transform: 'translateX(-600px)', // Optional: Set the initial transform for animation
        },
        {
          opacity: 1,
          transform: 'translateX(0)', // Optional: Set the final transform for animation
          duration: 5,
          scrollTrigger: {
            trigger: '.skillSection',
            start: startPoint, // Adjust the start position as needed
          end: endPoint,  // Adjust the end position as needed
            scrub: 1, // Adjust the scrub value for smoother animation
            toggleActions: 'play none none none', // Adjust toggle actions as needed
          },
        }
        );

        gsap.fromTo(
          '.skill', // Target element or class
        {
          opacity: 0,
          transform: 'translateY(60px)', // Optional: Set the initial transform for animation
        },
        {
          opacity: 1,
          transform: 'translateX(0)', // Optional: Set the final transform for animation
          duration: 5,
          scrollTrigger: {
            trigger: '.skill',
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
        animateElements('top 90%', 'top 70%');
      }
  
      // Event listener for changes in media query status
      const handleMediaQueryChange = (event) => {
        if (event.matches) {
          // Media query matches, apply animations
          animateElements('top 100%', 'top 80%');
        } else {
          animateElements('top 90%', 'top 70%');
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
    <Container id="skills">
      <Wrapper >
        <Title className='skillSection'>Skills</Title>
        <Description className='skillSection'>
          Depicted below are various skills I have been improving over the recent years.
        </Description>
        <SkillsContainer className='skill'>
        {skills.map((skill) => (
            <Skill >
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {
                  skill.skills.map((item) => (
                    <SkillItem>
                      {React.createElement(item.icon, {size: 35})}
                      {item.name}
                    </SkillItem>
                  ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills