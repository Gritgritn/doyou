import React, { useState } from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroBtnWrapper, HeroH1, HeroP, ArrowForward, ArrowRight } from './HeroElements'
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElement'

const HeroSection = () => {
    const [hover, sethover] = useState(false);

    const onHover = () => {
        sethover(!hover);
    }

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Виртуальный банкинг становится доступным</HeroH1>
                <HeroP>
                    Зарегистрируйте новый аккаунт сегодня и получите 250$ на кредитном счету для ваших покупок.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true"
                    to="signup" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                        Начать {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
