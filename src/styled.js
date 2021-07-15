import styled from 'styled-components'
import bgLanding from './assets/bgLanding.png'

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    background-color: #000;
`;

export const LandingSection = styled.section`
    display: flex;
    justify-content: flex-end;
    width: 100vw;
    max-width: 100vw;
    min-height: 100vh;
    background-image: url(${bgLanding});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: center;

    @media(max-width: 1025px) { 
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const LandingBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 40%;
    background-color: rgba(204, 204, 204, 0.7);

    @media(max-width: 1025px) {
        width: 100%;
        max-width: 100vw;
        padding: 5rem 0;
    };

    @media(min-width: 481px) and (max-width: 767px) {
        padding: 3rem 0;
    };

    @media(max-width: 480px) {
        padding: 2rem 0;
    };
`;

export const Img = styled.img`
    height: 10rem;
    width: auto;
    margin-bottom: 1rem;

    @media(min-width: 768px) and (max-width: 1025px) {
        height: 15rem;
    }

    @media(min-width: 481px) and (max-width: 767px) {
        height: 10 rem;
    }

    @media(max-width: 480px){
        height: 8rem;
    }
`;

export const P = styled.p`
    max-width: 80%;
    margin: .2rem 0;
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;

    @media(min-width: 768px) and (max-width: 1025px) {
        font-size: 2rem;
    }

    @media(min-width: 481px) and (max-width: 767px) {
        font-size: 1.5rem;
    }

    @media(max-width: 480px){
        font-size: 1rem;
    }
`;


export const ProductsSection = styled.section`
    width: 100vw;
    background-color: #fff;
`;

export const FooterSection = styled.section`
    width: 100vw;
    background-color: #000;
`;

export const CreditSection = styled.section`
    width: 100vw;
    display: flex;
    padding: .5rem 0;
    justify-content: center;
    background-color: #333;
    color: #fff;
`;

export const Link = styled.a`
    color: #fff;
    text-decoration: none;
    
`;