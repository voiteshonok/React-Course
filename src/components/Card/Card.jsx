import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    render() {
        const { img, title, price, description } = this.props;

        return (
            <div className='card'>
                <img className='card__img' src={img} alt='img' />
                <div className='card__description'>
                    <div className='card__description__header'>
                        <div className='card__description__header__title'>{title}</div>
                        <div className='card__description__header__price'>{price}</div>
                    </div>
                    <div>{description}</div>
    
                    <div className='card__description__buttons'>
                        <input className='card__input' type="text" value='1' maxLength="2" size="1" readOnly />
                        <button className='add__button'>Add to cart</button>
                    </div> 
                </div>
            </div>
        )
    }
}

export default Card;
