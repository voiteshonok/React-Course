import './Header.css'

import logo from '../../assets/Logo.png'
import cart from '../../assets/Cart.png'


export function Header() {
    return (
        <div className='header'>
            <img className='header__logo' src={logo} alt='logo' />
            <div className='header__menu'>Menu</div>
            <div className='header__home'>Home</div>
            <div className='header__companies'>Companies</div>
            <div className='header__login'>Login</div>
            <img className='header__cart' src={cart} alt='cart' />
            
        </div>
    )
}