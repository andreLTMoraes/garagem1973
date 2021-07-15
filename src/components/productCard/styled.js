import styled from 'styled-components'

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 14rem;
    background-color: #fff;
    text-align: center;
    padding: 1rem;

    @media(min-width: 768px) and (max-width: 1025px) {
        margin: 2rem 0;
    }

    @media(max-width: 767px) {
        margin: 2rem 0;
    }
`;

export const Img = styled.img`
    width: 100%;
    haight: auto;
`;

export const Header = styled.div`
    width: 100%;
    haight: auto;
`;

export const Footer = styled.div`
    width: 100%;
    haight: auto;
`;