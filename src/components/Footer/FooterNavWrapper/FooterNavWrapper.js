import React from 'react';
import styled from 'styled-components';
import FooterNavItem from '../FooterNavItem';

const NavContainer = styled.div.withConfig({displayName: 'NavContainer'})`
  display: flex;
  flex: 1;
  flex-direction: column;

  @media screen and (min-width: 960px) {
    flex: none;
    flex-direction: row;
    width: calc(100% / 1.4);
    height: 100%;
  }
`;

const FooterNavWrapper = ({navItems}) => (
  <NavContainer>
    {navItems &&
      navItems.map(({name, subNav}) => (
        <FooterNavItem key={name} navTitle={name} navLink={subNav} />
      ))}
  </NavContainer>
);

export default FooterNavWrapper;
