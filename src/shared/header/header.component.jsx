import React from 'react';
import { Link } from 'react-router-dom';

import {auth} from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/images/crown.svg';

import './header.style.scss';

const Header = ({currentUser}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>

      {
        currentUser ? 
        <div className='option' onClick={() => auth.signOut()}>Sign Out</div>
         : 
        <Link className='option' to='/signin'>Sign In</Link>        
      }
    </div>
  </div>
);

export default Header;