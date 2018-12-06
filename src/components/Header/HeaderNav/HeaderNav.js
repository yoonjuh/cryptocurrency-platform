import React from 'react';
import styled from 'styled-components';
import HeaderNavItem from '../HeaderNavItem';
import ResponsiveMenuBar from '../ResponsiveMenuBar';

const Container = styled.div`
  display: flex;
  font-size: 1.5rem;
  border-right: 1px #505050 solid;
  line-height: 1.2;
`;

const HeaderNav = ({navItems}) => (
  <Container>
    {navItems &&
      navItems.map(({name, subNav}) => (
        <HeaderNavItem key={name} title={name} subNav={subNav} />
      ))}
    <ResponsiveMenuBar />
  </Container>
);
export default HeaderNav;
