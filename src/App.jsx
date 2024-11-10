import React, { Component } from 'react';
import './App.css'
import { CardCollection, Header, BrowseMenu, Footer } from './components/index'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        counter: 0,
    };
  }

  incrementCounter = (addCounterValue) => {
    this.setState((prevState) => ({
        counter: prevState.counter + addCounterValue,
    }));
  }

  render() {
    const { counter } = this.state;

    return (
        <div className='app'>
            <Header counter={counter} />
            <BrowseMenu />
            <CardCollection counter={counter} incrementCounter={this.incrementCounter} />
            <Footer />
        </div>
    );
  }
}

export default App
