import React from 'react';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.util';
import CartIcon from '../../components/cart-icon/cartIconComponent';
import CartDropdown from '../../components/cart-dropdown/cartDropdownComponent';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/userSelector';
import { selectCartHidden } from '../../redux/cart/cartSelector';

import { 
  HeaderContainer, 
  LogoContainer, 
  OptionContainerDiv, 
  OptionContainerLink, 
  OptionContainer 
} from './headerStyle';

interface Props {
  currentUser: any;
  hidden: boolean;
}

const Header: React.FC<Props> = ({currentUser, hidden}) => {
  return(
    <HeaderContainer> 
      <LogoContainer  to='/'>
        <h1>LOGO</h1>
      </LogoContainer>
      <OptionContainer>
        <OptionContainerLink to='/shop'> SHOP </OptionContainerLink>
        <OptionContainerLink to='/contact'> CONTACT </OptionContainerLink>
        { currentUser ? 
          (<OptionContainerDiv onClick = {() => auth.signOut()}> SIGN OUT </OptionContainerDiv>)
          :
          <OptionContainerLink to='/auth'> SIGN IN </OptionContainerLink>
        }
        <CartIcon/>
        { hidden ? null : <CartDropdown/> }
      </OptionContainer>
    </HeaderContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps, null)(Header);