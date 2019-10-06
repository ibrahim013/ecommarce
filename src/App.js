import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth, createUserProfileDocument } from './firebase/firebase.util';



import AuthPage from './pages/authentication/authComponent';
import HomePage from './pages/homePage/homepageComponent';
import Header from './pages/header/headerComponent';
import ShopCollection from './pages/shop/shopComponent';

import setCurrentUserAction from './redux/user/userAction';


function App({setCurrentUser, currentUser}) {
  
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
        <Route exact path='/auth' render={() => currentUser ? (<Redirect to='/shop'/>) : (<AuthPage/>)}/>
      </Switch>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUserAction(user))
})

const mapStateToProps = ({user}) => ({ 
  currentUser: user.currentUser
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
