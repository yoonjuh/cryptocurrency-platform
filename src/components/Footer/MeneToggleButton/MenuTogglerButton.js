import React from 'react';
import styled from 'styled-components';

const NavTogglerButton = styled.div`
  color: #989898;
  font-size: 1.2rem;
  @media screen and (min-width: 960px) {
    display: none;
  }
`;

const HideAndShow = styled.span`
  & > *:first-child {
    display: ${props => (props.expand ? 'inline-block' : 'none')};
  }
  & > *:last-child {
    display: ${props => (props.expand ? 'none' : 'inline-block')};
  }
`;

const MenuTogglerButton = ({navToggler}) => (
  <NavTogglerButton>
    <HideAndShow expand={navToggler}>
      <i className="fas fa-angle-up" />
      <i className="fas fa-angle-down" />
    </HideAndShow>
  </NavTogglerButton>
);
export default MenuTogglerButton;
