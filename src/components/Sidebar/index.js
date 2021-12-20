import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SideBtnWrap, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        О нас
                    </SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>
                        Попробуйте
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                        Услуги
                    </SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>
                        Войти
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Регистрация</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
