import React from 'react';
import styled from 'styled-components';
import { FaGithub } from "react-icons/fa";
import { BsBoxArrowUpLeft } from "react-icons/bs";



const Card =styled.div`
    display: flex;
    justify-content: center;
    align-ietms: flex-start;
    padding: 15px 15px;
    width: 330px;
    height: 490px;
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
    overflow: hidden;
    gap: 14px;
    flex-direction: column;
    transition: all ease-in-out 0.3s;

    &:hover {
        transform: scale(1.05);
        transform: translateY(-10px);
        box-shadow: 0 0 12px 4px rgba(0,0,0,0.6);
        filter: brightness(1.05);
        transition: all ease-in-out 0.3s;
    }

`;

const ProjectImage = styled.img`
    width: 100%;
     height: 180px;
    align-items: cneter;
    background-color: ${({ theme }) => theme.white};
    object-fit: cover;
    broder-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);

`;

const Tags = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
    align-items: center;

`;

const Tag = styled.span`
    font-size: 12px;
    font-weight: 400;
    background-color:  ${({ theme }) => theme.primary+15};
    color: ${({ theme }) => theme.primary};
    padding: 2px 8px;
    border-radius: 10px;



`;

const Details =styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

const Date = styled.div`
font-size: 12px;
font-weight: 400;
margin-left 2px;
color: ${({ theme }) => theme.text_secondary};

    @media (max-width: 768px) {
        font-size: 10px;
    }
`;

const Description = styled.div`
font-weight: 400;
color: ${({ theme }) => theme.text_secondary};
overflow: hidden;
text-overflow: ellipsis;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
display: -webkit-box;
margin-top: 4px;
max-width: 100%;
height: 70px; 
`;

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
    align-items: center;
`

const GithubButton = styled.a`
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
width: 45%;
margin-top: 20px;
text-decoration: none;

&:hover {
  transition: 0.2s ease-in-out;
  transform: translateY(-10px);
  transform: scale(1.04);
  box-shadow: 0px 0px 15px 2px rgba(224,224,224,1);

}

`;
const DemoButton = styled.a`
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
width: 45%;
margin-top: 20px;

&:hover {
  transition: 0.2s ease-in-out;
  transform: translateY(-10px);
  transform: scale(1.04);
  box-shadow: 0px 0px 15px 2px rgba(224,224,224,1);

}

`;




const ProjectsCard = ({project}) => {
  return (
    <Card>
        <ProjectImage src={require(`../../images/${project.image}`)}/>
        <Tags>
            {project.tags.map((tags) => (
                <Tag key={tags}>{tags}</Tag>
            ))}
        </Tags>
        <Details>
            <Title>{project.title}</Title>
            <Date>{project.date}</Date>
            <Description>{project.description}</Description>
            <ButtonContainer>
            <GithubButton href={project.github} target="_blank">
                <FaGithub />Github
            </GithubButton>
            <DemoButton>
                <BsBoxArrowUpLeft />Live Demo
            </DemoButton>
            </ButtonContainer>
        </Details>
    </Card>
  )
}

export default ProjectsCard