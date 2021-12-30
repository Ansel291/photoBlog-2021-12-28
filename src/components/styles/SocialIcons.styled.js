import styled from "styled-components";

export const StyledSocialIcons = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;

    li {
        list-style: none;
    }
    
    a {
        border: 1px solid var(--offWhite);
        border-radius: 50%;
        color: var(--offWhite);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        height: 40px;
        width: 40px;
        text-decoration: none;
    }

    @media (min-width: ${({ theme }) => theme.tablet}) {
        margin-bottom: 0;
    }
`