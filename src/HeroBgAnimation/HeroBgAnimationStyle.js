import styled from 'styled-components';


export const Div = styled.div`
    width:500px;
    height: 500px;
    padding: 100px 0px;

    @media only screen and (max-width: 960px) {
        padding: 0px 0px 80px 0px;
    }

    @media only screen and (max-width: 648px) {
        padding: 30px 0px;
        width: 350px;
        height: 350px;
    }
`