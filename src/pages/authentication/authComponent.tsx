import React from 'react';
import './authStyle.scss'

import SignIn from '../../components/signin/siginComponent';
import SignUp from '../../components/sign-up/signUpComponent';

const Authentication = () => {

  return(
    <div className='auth-wrapper'>
      <SignIn/>
      <SignUp/>
    </div>
  )
}
export default Authentication;