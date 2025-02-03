import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { incrementCart } from './actions/cart';
import { changeCategory } from './actions/category';
import './App.css';
import { CardCollection, Header, BrowseMenu, Footer, HomeCard, Login } from './components/index';
import { RootState } from './store';

const App = () => {
  const cartCounter = useSelector((state: RootState) => state.cartCounter);
  const category = useSelector((state: RootState) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (!storedUsers) {
      const defaultUsers = [
        { username: 'user1', password: 'password1' },
        { username: 'user2', password: 'password2' },
        { username: 'admin', password: 'admin123' },
      ];
      localStorage.setItem('users', JSON.stringify(defaultUsers));
    }
  }, []);

  const incrementCounter = (addCounterValue: number) => {
    dispatch(incrementCart(addCounterValue));
  };

  return (
    <div className='app'>
      <Header counter={cartCounter} />
      <HomeCard />
      <Login />
      <BrowseMenu />
      <CardCollection incrementCounter={incrementCounter}/>
      <Footer />
    </div>
  );
};

export default App;
