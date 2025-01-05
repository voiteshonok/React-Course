import React, { useState, useEffect } from 'react';
import './CardCollection.css';

import useFetch from '../../useFetch'

import { Card } from '../index';

interface CardCollectionProps {
    category: string;
    incrementCounter: (inputValue: number) => void;
}

const CardCollection: React.FC<CardCollectionProps> = ({ incrementCounter, category }) => {
    const { data: cards, error, loading } = useFetch<CardType[]>('https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals');

    const [counter, setCounter] = useState<number>(6);


    const handleSeeMore = () => {
        setCounter((prevCounter) => prevCounter + 6);
    };

    const visibleCards: CardType[] = (cards || []).filter((card) => card.category === category).slice(0, counter);

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