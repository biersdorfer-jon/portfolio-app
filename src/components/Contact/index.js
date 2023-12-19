import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 0px 0px 60px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
    `;
const Card = styled.div`
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

const Title = styled.h1`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};

    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;


const Contact = () => {
  return (
    <Container>
        <Card>
            <Title>Contact</Title>
            <input type="text" name="name" id=""/>
            <input type="email" name="email" id=""/>
            <input type="phone" name="phone" id=""/>
            <textarea name="message" id="" cols="20" rows="8"></textarea>
            <button type="submit">Send</button>
        </Card>
    </Container>
  )
}

export default Contact