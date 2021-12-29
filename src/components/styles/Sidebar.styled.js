import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    left 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen}) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
    color: #e3e3e3;
`

export const SidebarIcon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`
export const SidebarWrapper = styled.div`
    color: #fff;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 70px);
    text-align: center;
    margin-bottom: 45px;

    @media(min-width: ${({ theme }) => theme.tablet}) {
        grid-template-rows: repeat(4, 80px);
    }
`

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    text-transform: capitalize;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #e3e3e3;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 22px;
    letter-spacing: 0.2px;

    &:hover {
        color: #01bf71;
    }
`
export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: #01b6bf;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    text-transform: capitalize;
    text-transform: uppercase;
    font-weight: 500;

    &:hover {
        background: #fff;
        color: #010606
    }
`
