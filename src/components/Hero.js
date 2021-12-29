import React, {useState} from 'react'
import Video from '../videos/video-large-opt.mp4'
import { HeroBtn } from './styles/Button.styled'
import {    HeroContainer, 
            HeroBackground, 
            /* VideoBackground, */
            HeroContent, 
            HeroH1,
            HeroP,
            HeroBtnWrapper,
            ArrowForward,
            ArrowRight } from './styles/Hero.styled'

const Hero = ({primary, big, dark, fontbig}) => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBackground>
                
                {/* <VideoBackground autoPlay={true} loop={true} controls={false}  playsInline muted src={Video} type='video/mp4' /> */}
                
                <div dangerouslySetInnerHTML={{ __html: `
                    <video
                        loop
                        muted
                        autoplay
                        playsinline
                        src="${Video}"
                    />,` }}>
                </div>

            </HeroBackground>
            <HeroContent>
                <HeroH1>Travel Blog</HeroH1>
                <HeroP>Follow along and see where i've gone recently.</HeroP>
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
