import React, { useState } from 'react';
import './App.css';
import { CardCollection, Header, BrowseMenu, Footer, HomeCard } from './components/index';

const App = () => {
  const [cartCounter, setCounter] = useState(0);
  const [category, setCategory] = useState("Dessert");

  const incrementCounter = (addCounterValue) => {
    setCounter((prevCounter) => prevCounter + addCounterValue);
  };

  const changeCategory = (newCategory) => {
    setCategory(newCategory);
  }

  return (
    <div className='app'>
      <Header counter={cartCounter} />
      <HomeCard />
      {/* <BrowseMenu changeCategory={changeCategory} />
      <CardCollection incrementCounter={incrementCounter} category={category}/> */}
      <Footer />
    </div>
  );
};

export default App;
