import React, { useState } from 'react';
import './App.css';
import { CardCollection, Header, BrowseMenu, Footer } from './components/index';

const App = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = (addCounterValue) => {
    setCounter((prevCounter) => prevCounter + addCounterValue);
  };

  return (
    <div className='app'>
      <Header counter={counter} />
      <BrowseMenu />
      <CardCollection counter={counter} incrementCounter={incrementCounter} />
      <Footer />
    </div>
  );
};

export default App;
