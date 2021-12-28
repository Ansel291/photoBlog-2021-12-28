import styled from "styled-components";

export const StyledFooter = styled.footer`
    background: ${({ theme }) => theme.colors.footer};
    color: #e3e3e3;
    padding: 50px 0;
    text-align: center;
    
    ul {
    list-style-type: none;
    padding-left: 0;
    }
    
    ul li {
    margin-bottom: 20px;
    font-size: 0.925em;
    }

    p {
    font-size 0.75em;
    text-align: center;
    opacity: 1;
    }
    

    @media (min-width: ${({ theme }) => theme.tablet}) {
    
        text-align: left;

        .margin-bottom-none {
            margin-bottom: 0;
        }

        ul {
            padding-left: 40px;
        }

        ul li {
            font-size: 0.95em;
        }

        p {
            text-align: center;
            margin-top: 40px;
        }

    }
`