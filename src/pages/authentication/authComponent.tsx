import React from 'react';
import './authStyle.scss'

import SignIn from '../../components/signin/siginComponent';

const Authentication = () => {

  return(
    <div className='auth-wrapper'>
      <SignIn/>
    </div>
  )
}
export default Authentication;