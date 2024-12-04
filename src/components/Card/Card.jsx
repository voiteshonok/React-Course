import React, { useState } from 'react';
import './Card.css';

const Card = ({ img, title, price, description, incrementCounter }) => {
    const [inputValue, setInputValue] = useState(1);

    const handleInputChange = (e) => {
        const value = parseInt(e.target.value, 10) || 0;
        setInputValue(value);
    };

    const handleAddToCart = () => {
        incrementCounter(inputValue);
    };

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
                    <input
                        className='card__input'
                        type='text'
                        value={inputValue}
                        maxLength='2'
                        size='1'
                        onChange={handleInputChange}
                    />
                    <button className='add__button' onClick={handleAddToCart}>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
