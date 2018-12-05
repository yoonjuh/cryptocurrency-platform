import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const NavTogglerButton = styled.div`
  color: #989898;
  font-size: 1.2rem;
  @media screen and (min-width: 960px) {
    display: none;
  }
`;

const MenuTogglerButton = ({navTitle, navToggler, clsName}) => {
  console.log(clsName);
  // if (navToggler) {
  //   return <i key="fas fa-angle-down" className="fas fa-angle-down" />;
  // }

  // return <i key="fas fa-angle-up" className="fas fa-angle-up" />;

  return (
    <NavTogglerButton key={navTitle}>
      {navToggler ? (
        <i key="fas fa-angle-down" className="fas fa-angle-down" />
      ) : null}
      {!navToggler ? (
        <i key="fas fa-angle-up" className="fas fa-angle-up" />
      ) : null}
    </NavTogglerButton>
  );
};
export default MenuTogglerButton;
