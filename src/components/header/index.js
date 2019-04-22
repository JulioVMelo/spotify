import React from 'react';
import { Container, User, Search } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search"/>
    </Search>
    <User>
      <img src="https://avatars1.githubusercontent.com/u/8390491?v=4" alt="avatar" />
      Júlio Melo
    </User>
  </Container>
);

export default Header;
