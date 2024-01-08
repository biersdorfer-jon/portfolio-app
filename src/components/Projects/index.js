import React, { useState } from 'react';
import styled from 'styled-components';
import ProjectsCard from '../Cards/ProjectsCard';
import { projects } from '../../data/constants';

const Container = styled.div`
background: transparent;
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
margin-top: 20px;
padding-top: 60px;
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

  ${({ active, theme }) => 
        active && 
`
        background-color: ${theme.primary+ 30};
        color: ${theme.white};

    `}

    &:hover {
        background-color: ${({ theme }) => theme.primary + 30};
        color: ${({ theme }) => theme.white};
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
  return (
    
    <Container id="projects">
        <Wrapper>
            <Title>Projects</Title>
            <Description>Here are some of my projects I have completed or are currently working on.</Description>

            <ToggleGroup>
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

            <CardContainer>
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