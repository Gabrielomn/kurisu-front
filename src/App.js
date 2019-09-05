import React from 'react';
import {Home} from './components/Home/Home'
import {Nav} from './components/Nav/Nav'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Home id="home">AA</Home>
    </div>
  );
}

export default App;
