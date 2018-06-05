import React, { Component } from 'react';
import logo from './logo.svg';
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import Home from './components/Home'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <div className="Footer"> <Footer /> </div>
      </div>
    );
  }
}

export default App;
