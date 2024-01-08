import React from 'react'
import styled, { useTheme } from 'styled-components';
import { FaBars } from "react-icons/fa";
import { Bio } from '../../data/constants';
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import { FaGithub } from 'react-icons/fa6';


const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {

    transition: 0.8s all ease;
  }

`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;
const ImageContainer = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
width: 50%;
height: 100%;
padding: 0 6px;
@media screen and (max-width: 768px) {
  width: 80%;
}
`;

const Image = styled.img`
width: 60px;
height: 60px;
display: flex;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
align-items: center;
@media screen and (max-width: 640px) {
  padding: 0 0px;
`;

const MobileIcon = styled.div`
display: none;
@media screen and (max-width: 768px) {
  display: flex;
  justify-content: center;
  width: 10%;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.text_primary};
}
`;
const NavItems = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
gap: 32px;
list-style: none;

@media screen and (max-width: 768px) {
  display: none;
`;

const NavLink = styled.a`
color: ${({ theme }) => theme.text_primary};
font-weight: 500;
cursor: pointer;
text-decoration: none;
transition: 0.2s ease-in-out;
font-size: 19px;
&:hover {
  color: ${({ theme }) => theme.primary};
}
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light+99};
  transition: all 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
border-radius: 0 0 20 20px;
box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
opacity: ${({ open }) => (open ? "1" : "0")};
z-index: ${({ open }) => (open ? "1" : "-1")};
`;

const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  padding: 0px 10px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
const MobileGithubButton = styled.a`
  padding: 10px 16px;
  color: ${({ theme }) => theme.primary};
  background: transparent;
  width: max-content;
  transition: color 0.2s ease-in-out;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 10px 32px;
  border: 1.8px solid ${({ theme }) => theme.primary};
border-radius: 20px;
text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.primary};
  }
`;

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
  height: 100%;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    width: 10%;
  }

  @media screen and (max-width: 400px) {
    width: 20%;
`;

const Toggle = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  transition: all .5s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: scale(1.15);
    transition: all .5s ease;
    
  }

`;

const Navbar = (props) => {
  
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  function changeTheme() {
    if (props.theme === "light") {
      props.setTheme("dark");
    } else {
      props.setTheme("light");
    }
  }

  const icon = props.theme === "light" ? <HiMoon size={30} /> : <CgSun size={30} />

  return (
    <Nav>
      <NavContainer>
<ImageContainer>
      <a href="#about">
              <Image src={require(`../../images/${theme.img}`)}/>
              </a>
              </ImageContainer>
      <MobileIcon>
        <FaBars 
          onClick={() => {
            setOpen(!open);
          }
        }
        />
      </MobileIcon>
      <NavItems>
        <NavLink href='#about'>About</NavLink>
        <NavLink href='#skills'>Skills</NavLink>
        <NavLink href='#projects'>Projects</NavLink>
        <NavLink href='#education'>Education</NavLink>
      </NavItems>
      <ToggleContainer>
      <Toggle onClick={changeTheme}>
              {icon}
            </Toggle>
      </ToggleContainer>
      </NavContainer>
      {
        open && (
          <MobileMenu open={open}>
            
            <MobileLink href="#about"
            onClick={() => {
              setOpen(!open)
            }}>About
            </MobileLink>
            <MobileLink href="#skills"
            onClick={() => {
              setOpen(!open)
            }}>
              Skills
            </MobileLink>
            <MobileLink href="#projects"
            onClick={() => {
              setOpen(!open)
            }}>
              Projects
            </MobileLink>
            <MobileLink href="#education"
            onClick={() => {
              setOpen(!open)
            }}>
              Education
            </MobileLink>
            
            <MobileGithubButton href={Bio.github}
            target="_blank"
              >
              <FaGithub />Github
            </MobileGithubButton>
            
          </MobileMenu>
        )
}
    </Nav>
  )
}

export default Navbar;