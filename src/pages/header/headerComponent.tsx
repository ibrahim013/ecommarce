import React from 'react';
import { Link } from 'react-router-dom';
import './headerStyle.scss';

const Header = () => {
  return(
    <div className='header-wrapper'> 
      <Link  className='logo-container' to='/'>
        <h1>LOGO</h1>
      </Link>
      <div className='options'>
        <Link  className='option' to='/shop'>
          SHOP
        </Link>
        <Link  className='option' to='/contact'>
          CONTACT
        </Link>
      </div>
    </div>
  )
}
export default Header;