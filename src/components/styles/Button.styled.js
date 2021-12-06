import styled from "styled-components";

export const Button = styled.button`
    border-radius: 50px;
    border: none;
    box-shadow: 0 0 10px rgba(0,0,0, 0.15);
    cursor: pointer;
    font-size: 16px;
    font-weight: 700px;
    padding: 13px 36px;
    background-color: ${({bg}) => bg || '#f9f9f9'};
    transition: 0.2s all ease;

    &:hover {
        background-color: #fff;
        transform: scale(0.98);
    }

    & > a {
        text-decoration: none;
        transition: 0.2s all ease;
        color: ${({color}) => color || '#8d8d8d'};
    }

    & > a:hover {
        color: #3a3a3a;
    }
`