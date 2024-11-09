import React, { Component } from 'react';

import './Footer.css'

import logo from '../../assets/Logo.png'

class Footer extends Component {
    render(){
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
                        <div>Style Guide</div>
                        <div>Changelog</div>
                        <div>Licence</div>
                        <div>Webflow Uniwersity</div>
                    </div>
                    <div className='footer__about__flowbase'>
                        <div>FLOWBASE</div>
                        <div>More Cloneables</div>
                    </div>
                </div>
            </div>
        )
    } 
}

export default Footer;