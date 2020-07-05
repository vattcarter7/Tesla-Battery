import React from 'react';
import './Header.scss';
import logoUrl from '../../assets/logo.svg';

const Header = () => (
  <div className='header'>
    <img src={logoUrl} alt='Tesla' />
  </div>
);

export default Header;
