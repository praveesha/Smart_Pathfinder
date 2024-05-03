import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Hero from './Components/Hero/Hero';
import AdminLogin from './Components/AdminLogin/AdminLogin';
import LoginRegister from './Components/LoginRegister/LoginRegister';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Hero} /> {/* Route for the home page */}
          <Route path="/adminLogin" component={AdminLogin} /> 
          <Route path="/adminRegister" component={LoginRegister} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
