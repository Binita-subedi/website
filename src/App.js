import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './src/components/Pages/Home';
import Services from './src/components/Pages/Services';
import Products from './src/components/Pages/Products';
import SignUp from './src/components/Pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
           <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} /> 
        </Switch>
      </Router>
    </>
  );
}

export default App;