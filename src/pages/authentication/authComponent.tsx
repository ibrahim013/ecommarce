import React from 'react';
import './authStyle.scss'

import SignIn from '../../components/signin/siginComponent';
import SiginUP from '../../components/sign-up/signUpComponent';

const Authentication = () => {

  return(
    <div className='auth-wrapper'>
      <SignIn/>
      <SiginUP/>
    </div>
  )
}
export default Authentication;