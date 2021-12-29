import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa'
import { SiYourtraveldottv } from 'react-icons/si'
import {IconContext} from 'react-icons/lib'
import {animateScroll as Scroll} from 'react-scroll'
import { 
    StyledNav, 
    NavbarContainer, 
    NavLogoContainer,
    NavLogoIconContainer,
    NavLogoText,
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinkS,
    NavBtn,
    NavBtnLinkR
} from './styles/Navbar.styled'

const Navbar = ({toggle}) => {

    const [isTransparent, setTransparent] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 10) {
            setTransparent(true)
        } else {
            setTransparent(false)
        }
    }

    useEffect(() => {
      window.addEventListener('scroll', changeNav) 
    }, [])

    const scrollHome = () => {
        Scroll.scrollToTop();
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#e3e3e3' }}>
                <StyledNav isTransparent={isTransparent}>
                    <NavbarContainer>
                        <NavLogoContainer to="/" onClick={scrollHome} >
                            <NavLogoIconContainer>
                                <SiYourtraveldottv/>
                            </NavLogoIconContainer>
                            <NavLogoText>Travel Blog</NavLogoText>
                        </NavLogoContainer>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinkS to='home' smooth={true} duration={500} spy={true} exact='true' offset={-70} >home</NavLinkS>
                            </NavItem>
                            <NavItem>
                                <NavLinkS to='locations' smooth={true} duration={500} spy={true} exact='true' offset={-70} >locations</NavLinkS>
                            </NavItem>
                            <NavItem>
                                <NavLinkS to='contact' smooth={true} duration={500} spy={true} exact='true' offset={-70} >contact</NavLinkS>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLinkR to='/signin'>sign in</NavBtnLinkR>
                        </NavBtn>
                    </NavbarContainer>
                </StyledNav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
