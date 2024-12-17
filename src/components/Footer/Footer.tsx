import React from 'react';
import './Footer.css';

import logo from '../../assets/Logo.png';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__logo'>
                <img className='footer__logo-img' src={logo} alt='logo' />
                <div className='footer__logo-text'>Takeaway & Delivery template. for small - medium businesses.</div>
            </div>
            <div className='footer__about'>
                <div className='footer__about__company'>
                    <div>COMPANY</div>
                    <div>Home</div>
                    <div>Order</div>
                    <div>FAQ</div>
                    <div>Contact</div>
                </div>
                <div className='footer__about__template'>
                    <div>TEMPLATE</div>
                    <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">Style Guide</a>
                    <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">Changelog</a>
                    <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">Licence</a>
                    <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">Webflow University</a>
                </div>
                <div className='footer__about__flowbase'>
                    <div>FLOWBASE</div>
                    <div>More Cloneables</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
