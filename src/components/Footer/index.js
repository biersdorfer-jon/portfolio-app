import React from 'react'
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";
import { Bio } from '../../data/constants';
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";



const FooterElement = styled.div`
    background-color: ${({ theme }) => theme.card_light};
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    border-top: 2px solid ${({ theme }) => theme.primary};
`;

const Container = styled.div`
    display: flex;
    weight: 100%;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.card_light};
    height: 90px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1200px;

    @media (max-width: 768px) {
        display: none;
    }

`;

const ContactSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 30%;
    @media (max-width: 768px) {
        display: none;
    }


`;

const Name = styled.h1`
    color: ${({ theme }) => theme.text_primary};
    font-size: 20px;
    width: 30%;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 8px;
    // text-shadow: 0 0 10px ${({ theme }) => theme.glow},
    // 0 0 20px ${({ theme }) => theme.glow},
    // 0 0 40px ${({ theme }) => theme.glow};

    @media (max-width: 845px) {
        font-size: 16px;
        letter-spacing: 5px;
    }

    @media (max-width: 768px) {
        width: 100%;
        padding: 12px 0px;
    }
    

    
    
    
`;


const Social = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  @media (max-width: 768px) {
    width: 100%;
}
`;

const Label =styled.div`
    color: ${({ theme }) => theme.text_primary};
    font-size: 16px; 
    padding: 4px 8px;
    @media (max-width: 845px) {
        padding: 3px 4px;
        font-size: 14px;
`;

const Info = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-size: 16px;
    text-decoration: none;
    padding: 4px 8px;
    

    &:hover {
        color: ${({ theme }) => theme.primary};

        @media (max-width: 845px) {
            padding: 3px 4px;
            font-size: 14px;
    }
`;

const Email = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;`;

const Phone = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

const Button = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-size: 25px;
    padding: 0px 12px;

    &:hover {
        color: ${({ theme }) => theme.primary}
    }
`;

const MobileContainer = styled.div`
    
display: none;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: ${({ theme }) => theme.card_light};
    height: 90px;
    z-index: 1;
    width: 100%;
    padding: 0 18px;
    max-width: 768px;
    color: ${({ theme }) => theme.text_primary};
    }
`;

const LeftButton = styled.a`
color: ${({ theme }) => theme.text_primary};
    font-size: 25px;
    padding: 0px 12px;

    &:hover {
        color: ${({ theme }) => theme.primary}
    }
`;



const Footer = () => {

  return (
    
    <FooterElement>
        
    <Container>
        <ContactSection>
        <Email>
            <Label>Email: </Label>
            <Info href="mailto:jbiersdorfer02@gmail.com" >jbiersdorfer02@gmail.com</Info>
        </Email>
        <Phone>
            <Label>Phone: </Label>
            <Info href="tel:9182372363">(918) 237-2363</Info>
        </Phone>
        </ContactSection>
        <Name>Jon Biersdorfer</Name>
        <Social>
        <Button href={Bio.github} target="_blank">
                  <FaGithub />
                  </Button>
                  <Button href={Bio.linkedin} target="_blank">
                  <FaLinkedin />
                  </Button>
                  <Button href={Bio.insta} target="_blank">
                  <FaInstagram />
                  </Button>
        </Social>
    </Container>
    <MobileContainer>
    <Name>Jon Biersdorfer</Name>
        <Social>
        <LeftButton href="tel:9182372363">
                    <FaPhone />
                </LeftButton>
                |
                <LeftButton href="mailto:jbiersdorfer02@gmail.com">
                    <MdOutlineEmail />
                </LeftButton>
                |
        <Button href={Bio.github} target="_blank">
               
                  <FaGithub />
                  </Button>
                  |
                  <Button href={Bio.linkedin} target="_blank">
                  <FaLinkedin />
                  </Button>
                  |
                  <Button href={Bio.insta} target="_blank">
                  <FaInstagram />
                  </Button>
        </Social>
        </MobileContainer>
    </FooterElement>
  )
}

export default Footer