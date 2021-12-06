import React from 'react';
import SocialIcons from './SocialIcons';
import { Container } from "./styles/Container.styled"
import { Flex } from "./styles/Flex.styled"
import { StyledFooter } from "./styles/Footer.styled"

export default function Footer() {
    return (
        <StyledFooter>
            <Container>
                <Flex>
                    <ul>
                        <li>Contact Me:</li>
                        <li>310-909-9358</li>
                        <li>jasahara@yahoo.com</li>
                    </ul>
                    <ul>
                        <li>About Me</li>
                        <li>What I Do</li>
                        <li>FAQ</li>
                    </ul>

                    <ul>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>

                    <SocialIcons/>

                </Flex>
                <p>&copy; 2021 Jason Asahara. All rights reserved</p>
            </Container>
        </StyledFooter>
    )
}
