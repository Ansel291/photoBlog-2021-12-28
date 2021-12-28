import React from 'react';
import SocialIcons from './SocialIcons';
import { Container } from "./styles/Container.styled"
import { Flex } from "./styles/Flex.styled"
import { StyledFooter } from "./styles/Footer.styled"

export default function Footer() {
    return (
        <StyledFooter id="contact">
            <Container>
                <Flex>
                    <ul>
                        <li>Los Angeles, CA</li>
                        <li>310-909-9358</li>
                        <li className="margin-bottom-none">jasahara@yahoo.com</li>
                    </ul>
                    <ul>
                        <li>About Me</li>
                        <li>Services</li>
                        <li className="margin-bottom-none">FAQ</li>
                    </ul>

                    <ul>
                        <li>Career</li>
                        <li>Blog</li>
                        <li className="margin-bottom-none">Contact Us</li>
                    </ul>

                    <SocialIcons/>

                </Flex>
                <p>&copy; {new Date().getFullYear()} Jason Asahara. All rights reserved.</p>
            </Container>
        </StyledFooter>
    )
}
