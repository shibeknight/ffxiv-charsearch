import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './views/Login';
import Home from './views/Home';
import Layout from './components/Layout';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </Layout>
        </div>
      </Router>
    </div>
  );
}

export default App;
