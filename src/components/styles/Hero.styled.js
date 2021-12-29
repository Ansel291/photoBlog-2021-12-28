import styled from 'styled-components'
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgb(0,0,0,.3) 0%, rgba(0,0,0,0.35) 100%), linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 100%);
        z-index: 2;
    }

    @media(min-width: ${({ theme }) => theme.tablet}) {
        height: 700px;
    }
`

export const HeroBackground = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const VideoBackground = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 32px;
    text-align: center;
    letter-spacing: 0.75px;
    margin-bottom: 5px;

    @media(min-width: ${({ theme }) => theme.mobile}) {
        font-size: 40px;
    }

    @media(min-width: ${({ theme }) => theme.tablet}) {
        font-size: 50px;
        margin-bottom: 12px;
    }
`

export const HeroP = styled.p`
    margin: 24px 0 5px;
    color: #fff;
    font-size: 18px;
    text-align: center;
    max-width: 600px;

    @media(min-width: ${({ theme }) => theme.tablet}) {
        margin-bottom: 12px;
        font-size: 20px;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`