import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './views/Login';
import Home from './views/Home';
import './App.css';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
