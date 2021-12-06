import styled from "styled-components";

export const StyledFooter = styled.footer`
    background: ${({ theme }) => theme.colors.header};
    color: #fff;
    padding: 100px 0 60px;
    
    ul {
    list-style-type: none;
    }
    
    ul li {
    margin-bottom: 20px;
    }

    p {
    font-size 0.75em;
    text-align: center;
    opacity: 1;
    }
    
    
    @media (max-width: ${({ theme }) => theme.tablet}) {
    
        text-align: center;

        ul {
            padding: 0;
        }
        p {
            text-align: center;
        }
    }
`