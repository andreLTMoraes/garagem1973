import styled from 'styled-components'

export const Input = styled.input`
    width: 100%;
    max-width: 80%;
    height: 2rem;
    margin-top: .3rem;
    border: none;
    border-radius: .25rem;

    &:first-of-type {
        margin-top: 1.5rem;
    }

    @media(min-width: 768px) and (max-width: 1025px) {
        height: 3rem;
        margin-top: .7rem;
    }

    @media(min-width: 481px) and (max-width: 767px) {
        height: 2rem;
        margin-top: .5rem;
    }

    @media(max-width: 480px) {
        height: 1.5rem;
        margin-top: .4rem;
    }

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;

export const Button = styled.button`
    width: 100%;
    max-width: 81%;
    height: 2rem;
    margin-top: .5rem;
    border: none;
    border-radius: .25rem;
    color: #fff;
    background-color: #000;
    font-weight: 600;

    @media(min-width: 768px) and (max-width: 1025px) {
        height: 3rem;
        margin-top: 1rem;   
    }

    @media(min-width: 481px) and (max-width: 767px) {
        height: 2rem;
        margin-top: .5rem;
    }

    @media(max-width: 480px) {
        height: 1.5rem;
    }

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
`;