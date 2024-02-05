import React, {useEffect} from 'react';
import styled from 'styled-components';
import { Bio } from "../../data/constants";
import { Typewriter } from 'react-simple-typewriter';
import HeroImg from "../../images/Hero3.jpg";
import HeroBgAnimation from '../../HeroBgAnimation';
import Resume from '../../images/Resume - Jon Biersdorfer.pdf';
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


 const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  opacity: 0;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;

`;

 const HeroBg = styled.div`
 position: absolute;
 display: flex;
 justify-content: end;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 width: 100%;
 height: 100%;
 max-width: 1360px;
 overflow: hidden;
 padding: 0 30px;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

 const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
 const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

 const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

 const Image = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

 const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

 const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

 const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

 const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 960px) {
    text-align: center;
    margin-bottom: 30px;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;
const ButtonContainerPC = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: 960px) {
    display: none;
  }
`;

const Button = styled.a`
  border-radius: 50%;
  color: ${({ theme }) => theme.white};
  padding: 8px;
  background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  width: 60px;
  height: 60px;
  font-size: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: all 0.4s ease-in-out;
    filter: brightness(1);
    }    

`;

 const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 50%;
    text-align: center;
    padding: 16px 0;
    color:${({ theme }) => theme.white};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 
    @media (max-width: 960px) {
      max-width: 300px;
      width: 85%;
      margin-bottom: 30px;
    }

`;

const ButtonContainerMobile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  @media (min-width: 961px) {
    display: none;
}
`;

const Socials = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 450px;
`;



const Hero = () => {

  useEffect(() => {
    // Animation timeline
    const tl = gsap.timeline();
    // Initial state (hidden)
    tl.set('.left', { opacity: 0, x: '-100%' });

    // Animation to bring the Container in from the left
    tl.to('.left', { duration: 4, opacity: 1, x: '0', ease: 'power4.out' });

    // You can adjust the delay according to your needs
    tl.delay(2); // Wait for 1 second after the page fully loads before starting the animation
  }, []); // Empty dependency array ensures the effect runs only once after initial render
  
  // ... rest of your code ...


  return (
    <div id="about">
        <HeroContainer className='left'>
            <HeroBg>
                <HeroBgAnimation />
            </HeroBg>
            <HeroInnerContainer>
                <HeroLeftContainer >
                    <Title>Hi, I am <br />
                    {Bio.name}</Title>
                    <TextLoop>
                        I am a 
                        <Span>
                        <Typewriter
                        words={Bio.roles}
                        loop={0}
                        cursor
                        cursorStyle='|'
                        typeSpeed={90}
                        deleteSpeed={80}
                        delaySpeed={1500}
                        />
                        </Span>
                    </TextLoop>
                <SubTitle>{Bio.description}</SubTitle>
                <ButtonContainerPC>
                <ResumeButton href={Resume} download="Resume - Jon Biersdorfer.pdf">Check Resume</ResumeButton>
                  <Button href={Bio.github} target="_blank">
                  <FaGithub />
                  </Button>
                  <Button href={Bio.linkedin} target="_blank">
                  <FaLinkedin />
                  </Button>
                  <Button href={Bio.insta} target="_blank">
                  <FaInstagram />
                  </Button>
                </ButtonContainerPC>
                <ButtonContainerMobile>
                <ResumeButton href={Resume} download="Resume - Jon Biersdorfer.pdf">Check Resume</ResumeButton>
                    <Socials>
                    <Button href={Bio.github} target="_blank">
                  <FaGithub />
                  </Button>
                  <Button href={Bio.linkedin} target="_blank">
                  <FaLinkedin />
                  </Button>
                  <Button href={Bio.insta} target="_blank">
                  <FaInstagram />
                  </Button>
                    </Socials>
                </ButtonContainerMobile>
                </HeroLeftContainer>
                <HeroRightContainer>
                    <Image src={HeroImg} alt="Hero" />
                </HeroRightContainer>
            </HeroInnerContainer>
        </HeroContainer>
    </div>
  )
}

export default Hero