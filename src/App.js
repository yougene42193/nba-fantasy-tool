import React from 'react';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import Teams from './Teams/Teams'
import Standings from './Standings/Standings'

function App() {
  return (
    <div className="App">
      <Header />
      <Standings />
    </div>
  );
}

export default App;
