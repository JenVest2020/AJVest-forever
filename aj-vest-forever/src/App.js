import React from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import Young from './components/Young';
import Reconnecting from './components/ReConnecting';

function App() {
  return (
    <div>
      <Navigation />
      <Route exact path='/'>
        <HomePage />
      </Route>
      <Route path='/Young'>
        <Young />
      </Route>
      <Route path='/Reconnecting'>
        <Reconnecting />
      </Route>

    </div>
  );
}

export default App;
