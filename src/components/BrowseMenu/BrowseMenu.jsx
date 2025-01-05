import React, { useState } from 'react';
import './BrowseMenu.css';

const BrowseMenu = ({ changeCategory, selectedCategory}) => {

    const categories = ['Dessert', 'Dinner', 'Breakfast']

    return (
        <div className='browseMenu'>
            <div className='browseMenu__title'>Browse our menu</div>
            <div className='browseMenu__text'>
                Use our menu to place an order online, or  
                <span className="tooltip">
                    phone<span className="tooltiptext">+375775778</span>
                </span> 
                our store to place a pickup order. Fast and fresh food.
            </div>
            <div className='browseMenu__buttons'>
            {categories.map((category) => (
                <button
                    key={category}
                    className={`browseMenu_buttons-${category.toLowerCase()} ${selectedCategory === category ? 'active' : ''}`}
                    type="button"
                    onClick={() => changeCategory(category)}
                >
                    {category}
                </button>
                ))}
            </div>
        </div>
    );
};

export default BrowseMenu;
