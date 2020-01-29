import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './views/Login';
import Home from './views/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
