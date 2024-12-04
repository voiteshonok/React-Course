import React, { useState, useEffect } from 'react';
import './CardCollection.css';

import { Card } from '../index';

const CardCollection = ({ incrementCounter, category }) => {
    const [cards, setCards] = useState([]);
    const [counter, setCounter] = useState(6);

    useEffect(() => {
        fetch('https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals')
            .then((response) => response.json())
            .then((data) => setCards(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const handleSeeMore = () => {
        setCounter((prevCounter) => prevCounter + 6);
    };

    const visibleCards = cards.filter((card) => card.category === category).slice(0, counter);

    return (
        <div className='mainMenu'>
            <div className='cardCollection'>
                {visibleCards
                .filter((card) => card.category === category)
                .map((card) => (
                    <Card
                        key={card.id}
                        title={card.meal}
                        img={card.img}
                        price={`$ ${card.price} USD`}
                        description={card.category}
                        incrementCounter={incrementCounter}
                    />
                ))}
            </div>
            <button className='mainMenu__more' onClick={handleSeeMore}>
                See more
            </button>
        </div>
    );
};

export default CardCollection;
