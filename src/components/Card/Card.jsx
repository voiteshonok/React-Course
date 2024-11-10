import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    state = {
        inputValue: 1 
    };

    handleInputChange = (e) => {
        const value = parseInt(e.target.value, 10) || 0;
        this.setState({ inputValue: value });
    }

    handleAddToCart = () => {
        const { inputValue } = this.state;
        this.props.incrementCounter(inputValue);
    }

    render() {
        const { inputValue } = this.state;
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
                        <input 
                            className='card__input' 
                            type="text" 
                            value={inputValue}
                            maxLength="2" 
                            size="1" 
                            onChange={this.handleInputChange} 
                        />
                        <button className='add__button' onClick={this.handleAddToCart}>Add to cart</button>
                    </div> 
                </div>
            </div>
        )
    }
}

export default Card;
