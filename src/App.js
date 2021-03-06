import React from 'react';
import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (

    // BEM
    <div className="app">
      <Router forceRefresh={true} >
        <Header />
        <Switch>
          <Route exact path= "/">
            <Home />
          </Route>
          <Route path= "/search" >
            <SearchPage/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
