import styled from "styled-components";

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border-radius: 15px; */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    margin: 40px 0;
    padding: 0px 25px 25px;
    text-align: center;
    border: 1px solid #ebebeb;

    img{
        margin-top: 5px;
        border-radius: 2px;
    }

    & > div {
        flex: 1;
    }

    & > div > h2 {
        font-size: 28px;
    }

    & p.date {
        font-size: 0.75em;
    }

    @media(min-width: ${({ theme }) => theme.tablet}) {
        flex-direction: row;
        flex-direction: ${({layout}) => layout || 'row'};
        padding: 30px;

        & > div {
            padding: 0 35px;
        }

        & > div > h2 {
            line-height: 35px;
            font-size: 30px;
        }

        h2,
        p {
            text-align: left;
        }

    }

    @media(min-width: ${({ theme }) => theme.desktop}) {

        padding: 35px 30px;

        img {
            width: 375px;
        }

    }
`
