import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import Teams from './Teams/Teams';
import Standings from './Standings/Standings';
import Reports from './Reports/Reports';
import Schedule from './Schedule/Schedule';
import Footer from './Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route
            exact path='/'
            component={Home}
          />
          <Route 
            path='/teams'
            component={Teams}
          />
          <Route 
            path='/standings'
            component={Standings}
          />
          <Route
            path='/schedule'
            component={Schedule}
          />
          <Route 
            path='/reports'
            component={Reports}
          />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
