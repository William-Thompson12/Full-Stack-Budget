import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

// pages
import HomePage from './views/home';
import SignupPage from './views/signup';
import MainHub from './views/mainhub';
import About from './views/about';

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/mainHub" component={MainHub} />
          <Route exact path="/about" component={About} />
          <Route path="*">
            <Redirect to='/' />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
