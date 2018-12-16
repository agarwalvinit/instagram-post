import React from 'react';
import './style.scss';

const Header = () => (
    <div className={'Nav'}>
        <div className={'HiddenNav'}></div>
        <header className={'AppHeader'}>
            <div className={'MainNav'}>
                <span className={'SpriteImage Logo'}></span>
                <div className={'Separator'}></div>
                <span className={'SpriteImage InstaLogo'}></span>
            </div>
        </header>
    </div>
);

export default Header;
