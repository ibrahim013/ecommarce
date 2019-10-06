import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './headerStyle.scss';
import { auth } from '../../firebase/firebase.util';
import CartIcon from '../../components/cart-icon/cartIconComponent';
import CartDropdown from '../../components/cart-dropdown/cartDropdownComponent';

interface Props {
  currentUser: any;
  hidden: boolean;
}

const Header: React.FC<Props> = ({currentUser, hidden}) => {
  return(
    <div className='header-wrapper'> 
      <Link  className='logo-container' to='/'>
        <h1>LOGO</h1>
      </Link>
      <div className='options'>
        <Link  className='option' to='/shop'> SHOP </Link>
        <Link  className='option' to='/contact'> CONTACT </Link>
        { currentUser ? 
          (<div  className='option' onClick = {() => auth.signOut()}> SIGN OUT </div>)
          :
          <Link  className='option' to='/auth'> SIGN IN </Link>
        }
        <CartIcon/>
        { hidden ? null : <CartDropdown/> }
      </div>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  currentUser: state.user.currentUser,
  hidden: state.toggleCartHidden.hidden
})

export default connect(mapStateToProps, null)(Header);