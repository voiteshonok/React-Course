import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { changeCategory } from '../../actions/category';
import { RootState } from '../../store';
import './BrowseMenu.css';


const BrowseMenu: React.FC = () => {
    const selectedCategory = useSelector((state: RootState) => state.category);
    const dispatch = useDispatch();

    const handleCategoryChange = (category: string) => {
        dispatch(changeCategory(category));
    };

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
                    onClick={() => handleCategoryChange(category)}
                >
                    {category}
                </button>
                ))}
            </div>
        </div>
    );
};

export default BrowseMenu;
