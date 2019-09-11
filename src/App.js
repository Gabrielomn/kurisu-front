import React from 'react';
import {Home} from './components/Home/Home'
import {HowToUse} from './components/HowToUse/HowTo'

import Nav from './components/Nav/Nav'
import {BrowserRouter as Router, Route, Link, browserHistory} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav></Nav>
        <Route exact path="/" component={Home}></Route>
        <Route path="/howTo" component={HowToUse}></Route>
      </Router>
    </div>
  );
}

export default App;
