import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import './App.css';

import AuthPage from './pages/authentication/authComponent';
import HomePage from './pages/homePage/homepageComponent';
import Header from './pages/header/headerComponent';
import ShopCollection from './pages/shop/shopComponent';


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  
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
      setCurrentUser(null);
    })
  },[]);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopCollection}/>
        <Route exact path='/auth' component={AuthPage}/>
      </Switch>
    </div>
  );
}

export default App;
