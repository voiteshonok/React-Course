import './CardCollection.css'

import { Card } from '../index'


export function CardCollection({ cards }) {
    return (
        <div className='mainMenu'>
            <div className='cardCollection'>
                {cards.map((card) => (
                    <Card key={card.id} title={card.title} img={card.img} price={card.price} descriprion={card.descriprion}/>
                ))}
            </div>
            <button className='mainMenu__more'>See more</button>
        </div>
    )
}