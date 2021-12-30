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
    color: var(--offWhite);
`

export const SidebarIcon = styled.div`
    position: absolute;
    top: 1.3rem;
    right: 22px;
    background: transparent;
    font-size: 1.8rem;
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
    color: var(--offWhite);
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 21px;
    letter-spacing: 0.2px;

    &:hover {
        color: var(--primaryColor);
    }
`
export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: var(--primaryColor);
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 17px;
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
