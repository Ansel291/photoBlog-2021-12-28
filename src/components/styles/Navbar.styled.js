import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const StyledNav = styled.nav`
    background: ${({ isTransparent }) => (isTransparent ? '#000' : 'transparent')};
    height: 70px;
    margin-top: -70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    transition: 0.5s all ease;
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 70px;
    width: 100%;
    padding: 0 24px;
    max-width: 1000px;
`

export const NavLogo = styled(LinkR)`
    color: #e3e3e3;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1rem;
    display: flex;
    align-items: center;
    font-weight: 700;
    text-decoration: none;
    letter-spacing: 0.1px;
    /* display: none; */

    @media(min-width: ${({ theme }) => theme.tablet}) {
        font-size: 1.25rem;
    }
`

export const MobileIcon = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size 1.8rem;
    cursor: pointer;
    
    @media(min-width: ${({ theme }) => theme.tablet}) {
        display: none;
    }
`

export const NavMenu = styled.ul`
    display: none;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 1.5%;
    text-transform: uppercase;
    font-weight: 500;

    @media(min-width: ${({ theme }) => theme.tablet}) {
        display: flex;
    } 
`

export const NavItem = styled.li`
    height: 70px;
`

export const NavLinkS = styled(LinkS)`
    color: #e3e3e3;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 15px;
    letter-spacing: 0.25px;

    &.active {
        border-bottom: 3px solid #01b6bf;
    }
`

export const NavBtn = styled.nav`
    display: none;
    
    @media(min-width: ${({ theme }) => theme.tablet}) {
        display: flex;
        align-items: center;
        text-transform: uppercase;
        font-weight: 500;
        letter-spacing: 0.15px;
    } 
`

export const NavBtnLinkR = styled(LinkR)`
    border-radius: 50px;
    background: #01b6bf;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 14.5px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        background: #fff;
        color: #010606;
    }
`