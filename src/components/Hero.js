import React, {useState} from 'react'
import Video from '../videos/video-large-opt.mp4'
import { HeroBtn } from './styles/Button.styled'
import {    HeroContainer, 
            HeroBackground, 
            HeroContent, 
            HeroH1,
            HeroP,
            HeroBtnWrapper,
            ArrowForward,
            ArrowRight } from './styles/Hero.styled'
import './styles/css/HeroVideo.css'

const Hero = ({primary, big, dark, fontbig}) => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBackground>
                <div className="hero-video-wrapper" dangerouslySetInnerHTML={{ __html: `<video loop muted autoplay playsinline src="${Video}" class="hero-video-background"/>,` }}>
                </div>
            </HeroBackground>
            <HeroContent>
                <HeroH1>Travel Blog</HeroH1>
                <HeroP>Follow along and see our Adventures</HeroP>
                <HeroBtnWrapper>
                    <HeroBtn to='locations' onMouseEnter={onHover} onMouseLeave={onHover} primary={primary ? 1 : 0} big={big ? 1 : 0} dark={dark ? 1 : 0} fontbig={fontbig ? 1 : 0} smooth={true} duration={500} spy={true} exact='true' offset={-70} >
                        see travels { hover ? <ArrowForward /> : <ArrowRight /> }
                    </HeroBtn>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
