import React, { Component } from 'react';
import './CardCollection.css'

import { Card } from '../index'


class CardCollection extends Component {
    render() {
        const { cards } = this.props;
        return (
            <div className='mainMenu'>
                <div className='cardCollection'>
                    {cards.map((card) => (
                        <Card key={card.id} title={card.title} img={card.img} price={card.price} description={card.description}/>
                    ))}
                </div>
                <button className='mainMenu__more'>See more</button>
            </div>
        )
    }
}

export default CardCollection;
