import React from 'react';

import logo from '../../assets/marvel.svg';

import { Container, Logo } from './styles';

const Header = ({ children }) => {
  return (
    <Container>
      <Logo src={logo} alt="Marvel" />
      {children}
    </Container>
  );
};

export default Header;
