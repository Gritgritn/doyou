import React from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Уменьшите расходы</ServicesH2>
                    <ServicesP>Мы помогаем уменьшить общий объём расходов, возвращая процент от ваших затрат.</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Virtual offices</ServicesH2>
                    <ServicesP>Вы можете получить доступ к нашей платформе где бы вы ни были.</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Экслизивное предложение</ServicesH2>
                    <ServicesP>Получите статус специального пользователя, чтобы получить 5% кэшбек.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;
