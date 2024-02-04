import React, {useEffect} from 'react'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education } from '../../data/constants';
import EducationCard from '../Cards/EducationCard';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';




const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 0px 0px 60px 0px;
    padding-top: 40px;
    background: #854CE6B3;

    @media (max-width: 768px) {
        padding: 30px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 40px 0px 0px 0px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    @media (max-width: 660px) {
        align-items: center;
    }
`;



const Education = () => {

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
      const animateElements = (startPoint, endPoint) => {
        
        gsap.fromTo(
          '.educationTop', // Target element or class
        {
          opacity: 0,
          transform: 'translateX(-600px)', // Optional: Set the initial transform for animation
        },
        {
          opacity: 1,
          transform: 'translateX(0)', // Optional: Set the final transform for animation
          duration: 5,
          scrollTrigger: {
            trigger: '.educationTop',
            start: startPoint, // Adjust the start position as needed
          end: endPoint,  // Adjust the end position as needed
            scrub: 1, // Adjust the scrub value for smoother animation
            toggleActions: 'play none none none', // Adjust toggle actions as needed
          },
        }
        );

        gsap.fromTo(
          '.education', // Target element or class
        {
          opacity: 0,
          transform: 'translateY(60px)', // Optional: Set the initial transform for animation
        },
        {
          opacity: 1,
          transform: 'translateX(0)', // Optional: Set the final transform for animation
          duration: 5,
          scrollTrigger: {
            trigger: '.education',
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
        <Container id="education">
            <Wrapper>
                <Title className='educationTop'>Education</Title>
                <Desc className='educationTop'>
                    My education has been a journey equipping me for the dynamic career ahead of me.
                </Desc>
                <TimelineSection className='education'>
                    <Timeline>
                        {education.map((education,index) => (
                            <TimelineItem >
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <EducationCard education={education}/>
                                </TimelineContent>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !== education.length  && <TimelineConnector style={{ background: '#854CE6' }} />}
                                </TimelineSeparator>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </TimelineSection>
            </Wrapper>
        </Container>
    )
}

export default Education