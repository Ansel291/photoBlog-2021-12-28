import React from 'react';
import {StyledHeader, Nav, Logo, Image} from "./styles/Header.styled"
import { Container } from './styles/Container.styled'
import { Flex } from "./styles/Flex.styled"
import { Button } from "./styles/Button.styled"

export default function Header() {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo>Photo Travel Blog</Logo>
                    <Button as="a" href="mailto:jasahara@yahoo.com">Contact Us</Button>
                </Nav>
                <Flex>
                    <div>
                        
                        <p>
                            Featured Location:
                        </p>
                        <h1>Punta Cana, Dominican Republic</h1>
                        <p>
                            The deck along the powdery white beach of the Hyatt Zilara Resort.
                        </p>

                    </div>

                    <Image src='./images/zilaraPuntaCanaDockOpt.png' alt='' />
                </Flex>
            </Container>
        </StyledHeader>
    )
}