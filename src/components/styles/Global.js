import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
    }

    body {
        background: ${({theme}) => theme.colors.body};
        color: hsl(192, 100%, 9%);
        font-family: 'Raleway', sans-serif;
        margin: 0;
        -webkit-font-smoothing: antialiased;
    }

    h1 {
        font-size: 32px;
    }

    p {
        line-height: 1.5;
        font-size: 15px;
    }

    img {
        max-width: 100%;
    }

    ul {
        padding: 0;
    }

    @media(min-width: ${({ theme }) => theme.tablet}) {
        
        p {
            font-size: .95em;
        }

        h1 {
            font-size: 36px;
        }
    
    }

`

export default GlobalStyles