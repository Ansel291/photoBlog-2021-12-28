import styled from "styled-components"
import { Link } from 'react-scroll'

export const HeroBtn = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    border-radius: 50px;
    background:  ${({primary}) => (primary ? '#01b6bf' : '#010606')};
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#e3e3e3')};
    font-size: ${({fontbig}) => (fontbig ? '20px' : '14px')};
    white-space: nowrap;
    outline: none;
    border: none;
    cursor: pointer;
    letter-spacing: 0.5px;
    font-weight: 500;
    text-transform: uppercase;
    
    &:hover {
        background:  ${({primary}) => (primary  ? '#fff' : '#01b6bf')};
    }

    @media(min-width: ${({ theme }) => theme.tablet}) {
        font-size: ${({fontbig}) => (fontbig ? '22px' : '14.5px')};
    } 
`