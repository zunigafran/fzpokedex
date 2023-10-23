import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dex from './Dex';
import Details from './Details';

function App() {
  return (
    <Router>
        <Route exact path="/" component={Dex} />
        <Route path="/details/:index" component={Details} />
    </Router>
  );
}

export default App;