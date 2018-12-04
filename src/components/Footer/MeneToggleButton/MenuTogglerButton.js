import React from 'react';
import styled from 'styled-components';

const NavTogglerButton = styled.div`
  color: #989898;
  font-size: 1.2rem;
  @media screen and (min-width: 960px) {
    display: none;
  }
`;

const MenuTogglerButton = ({navTitle, navToggler}) => (
  <NavTogglerButton>
    {navToggler ? (
      <i name={navTitle} className="fas fa-angle-down" />
    ) : (
      <i name={navTitle} className="fas fa-angle-up" />
    )}
  </NavTogglerButton>
);
export default MenuTogglerButton;
