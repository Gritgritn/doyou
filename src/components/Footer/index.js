import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems,
    FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIconLink, SocialIcons } from './FooterElements';
import { FaFacebook, FaInstagram, FaYoutube, FaVk  } from 'react-icons/fa'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>О нас</FooterLinkTitle>
                            <FooterLink to='/signin'>Создатели</FooterLink>
                            <FooterLink to='/signin'>Инвесторы</FooterLink>
                            <FooterLink to='/signin'>Контакты</FooterLink>
                            <FooterLink to='/signin'>Присоединиться</FooterLink>
                            <FooterLink to='/signin'>Соглашение использования</FooterLink>
                        </FooterLinksItems>

                        <FooterLinksItems>
                            <FooterLinkTitle>Контакты</FooterLinkTitle>
                            <FooterLink to='/signin'>Команда</FooterLink>
                            <FooterLink to='/signin'>Разработчики</FooterLink>
                            <FooterLink to='/signin'>Финансы</FooterLink>
                            <FooterLink to='/signin'>Поддержка</FooterLink>
                            <FooterLink to='/signin'>Основатель</FooterLink>
                        </FooterLinksItems>

                        <FooterLinksItems>
                            <FooterLinkTitle>Видео</FooterLinkTitle>
                            <FooterLink to='/signin'>Канал</FooterLink>
                            <FooterLink to='/signin'>Обучение</FooterLink>
                            <FooterLink to='/signin'>Регистрация</FooterLink>
                            <FooterLink to='/signin'>Карты</FooterLink>
                            <FooterLink to='/signin'>Блогеры</FooterLink>
                        </FooterLinksItems>

                        <FooterLinksItems>
                            <FooterLinkTitle>Социальные сети</FooterLinkTitle>
                            <FooterLink to='/signin'>Instagram</FooterLink>
                            <FooterLink to='/signin'>Facebook</FooterLink>
                            <FooterLink to='/signin'>Вконтакте</FooterLink>
                            <FooterLink to='/signin'>Youtube</FooterLink>
                            <FooterLink to='/signin'>Twitter</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>doyou </SocialLogo>
                        <WebsiteRights>doyou © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Vk">
                                <FaVk />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
