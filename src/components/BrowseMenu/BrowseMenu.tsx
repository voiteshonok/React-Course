import React, { useState } from 'react';
import './BrowseMenu.css';

interface BrowseMenuProps {
    changeCategory: (category: string) => void;
  }

const BrowseMenu: React.FC<BrowseMenuProps> = ({ changeCategory }) => {
    const [selectedCategory, setSelectedCategory] = useState('Dessert');

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        changeCategory(category);
    };

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
            <button 
                    className={`browseMenu_buttons-desert ${selectedCategory === 'Dessert' ? 'active' : ''}`}
                    type="button" 
                    onClick={() => handleCategoryChange('Dessert')}
                >
                    Dessert
                </button>
                <button 
                    className={`browseMenu_buttons-dinner ${selectedCategory === 'Dinner' ? 'active' : ''}`}
                    type="button" 
                    onClick={() => handleCategoryChange('Dinner')}
                >
                    Dinner
                </button>
                <button 
                    className={`browseMenu_buttons-breakfast ${selectedCategory === 'Breakfast' ? 'active' : ''}`}
                    type="button" 
                    onClick={() => handleCategoryChange('Breakfast')}
                >
                    Breakfast
                </button>
            </div>
        </div>
    );
};

export default BrowseMenu;
