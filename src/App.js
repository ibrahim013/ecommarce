import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homePage/homepageComponent';
import ShopCollection from './pages/shop/shopComponent';
import Header from './pages/header/headerComponent';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component ={ShopCollection}/>
      </Switch>
    </div>
  );
}

export default App;
