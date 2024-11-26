import React, { Component } from 'react';
import './CardCollection.css'

import { Card } from '../index'


class CardCollection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            counter: 6
        };
    }

    componentDidMount() {
        fetch('https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals')
            .then(response => response.json())
            .then(data => {
                this.setState({ cards: data });
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    handleSeeMore = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 6
        }));
    }

    render() {
        const { incrementCounter } = this.props;

        const { cards, counter } = this.state;
        const visibleCards = cards.slice(0, counter);

        return (
            <div className='mainMenu'>
                <div className='cardCollection'>
                    {visibleCards.map((card) => (
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
                <button className='mainMenu__more'onClick={this.handleSeeMore}>See more</button>
            </div>
        )
    }
}

export default CardCollection;
