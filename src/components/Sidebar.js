import React from 'react'
import { 
    SidebarContainer,
    SidebarIcon,
    CloseIcon, 
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './styles/Sidebar.styled'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen}>
            <SidebarIcon onClick={toggle}>
                <CloseIcon />
            </SidebarIcon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="home" onClick={toggle}>
                        home
                    </SidebarLink>
                    <SidebarLink to="locations" onClick={toggle} offset={-70}>
                        locations
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>
                        contact
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute onClick={toggle} to="/signin">sign in</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>       
    )
}

export default Sidebar
