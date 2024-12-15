import React, { useState, useEffect } from 'react';
import './App.css';
import { CardCollection, Header, BrowseMenu, Footer, HomeCard, Login } from './components/index';

const App = () => {
  const [cartCounter, setCounter] = useState(0);
  const [category, setCategory] = useState("Dessert");

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

  const incrementCounter = (addCounterValue) => {
    setCounter((prevCounter) => prevCounter + addCounterValue);
  };

  const changeCategory = (newCategory) => {
    setCategory(newCategory);
  }

  return (
    <div className='app'>
      <Header counter={cartCounter} />
      {/* <HomeCard /> */}
      <Login />
      {/* <BrowseMenu changeCategory={changeCategory} />
      <CardCollection incrementCounter={incrementCounter} category={category}/> */}
      <Footer />
    </div>
  );
};

export default App;
