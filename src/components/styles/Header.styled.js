import styled from "styled-components";

export const StyledHeader = styled.header`
    background: ${({ theme }) => theme.colors.header};
    padding: 40px 0;

    h1 {
        color: #fff;
        text-shadow: 2px 2px 2px #7c7c7c;
    }

    p {
        color: #fff;
        text-shadow: 1px 1px 1px #7c7c7c;
        opacity: 1;
    }

    p:nth-of-type(1) {
        display: none;
    }

    @media(min-width: ${({ theme }) => theme.tablet}) {
        
        p {
            padding-right: 20px;
        }

        p:nth-of-type(1) {
            display: block;
        }

    }

`   

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 35px;
     
    @media(min-width: ${({ theme }) => theme.tablet}) {
        flex-direction: row;
    }
`

export const Logo = styled.div`
    font-size: 0.95em;
    font-weight: 700;
    text-transform: uppercase;
    text-shadow: 1px 1px 1px #7c7c7c;
    margin-bottom: 15px;
    color: #fff;

    @media(min-width: ${({ theme }) => theme.tablet}) {
        margin-bottom: 0px;
    }
`

export const Image = styled.img`
    width: 375px;
    margin: 40px 0 30px;
    border-radius: 2px;
    box-shadow: 0 0 10px rgb(0 0 0 / 55%);

    @media(min-width: ${({ theme }) => theme.tablet}) {
        margin-left: 40px;
    }

    @media(min-width: ${({ theme }) => theme.desktop}) {
        width: 445px;
    }
`