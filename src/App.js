import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import AuthPage from './pages/authentication/authComponent';
import HomePage from './pages/homePage/homepageComponent';
import Header from './pages/header/headerComponent';
import ShopCollection from './pages/shop/shopComponent';


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopCollection}/>
        <Route exact path='/auth' component={AuthPage}/>
      </Switch>
    </div>
  );
}

export default App;
