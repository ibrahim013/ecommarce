import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth, createUserProfileDocument } from './firebase/firebase.util';



import AuthPage from './pages/authentication/authComponent';
import HomePage from './pages/homePage/homepageComponent';
import Header from './pages/header/headerComponent';
import ShopCollection from './pages/shop/shopComponent';

import setCurrentUserAction from './redux/user/userAction';


function App({setCurrentUser}) {
  
  useEffect(()=> {
    auth.onAuthStateChanged(async(userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }
      setCurrentUser(userAuth);
    })
  },[setCurrentUser]);

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

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUserAction(user))
})
export default connect(null, mapDispatchToProps)(App);
