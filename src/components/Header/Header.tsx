import React from 'react';
import './Header.css';

import logo from '../../assets/Logo.png';
import cart from '../../assets/Cart.png';

interface HeaderProps {
    counter: number;
}

const Header: React.FC<HeaderProps> = ({ counter }) => {
    return (
        <div className='header'>
            <img className='header__logo' src={logo} alt='logo' />
            <div className='header__navigation'>
                <div className='header__home'>Home</div>
                <div className='header__menu'>Menu</div>
                <div className='header__companies'>Company</div>
                <div className='header__login'>Login</div>
                <div className='header__navigation__img-container'>
                    <img className='header__cart' src={cart} alt='cart' />
                    <div className="overlay-circle">{counter}</div> 
                </div>
            </div>
        </div>
    );
};

export default Header;
