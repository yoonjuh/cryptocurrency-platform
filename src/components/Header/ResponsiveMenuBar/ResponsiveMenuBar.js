import React, {useState} from 'react';
import styled from 'styled-components';

const HambergerMenu = styled.div`
  display: inline-block;
  cursor: pointer;

  .bar1 .bar2 .bar3 {
    width: 25px;
    height: 5px;
    background-color: #333;
    margin: 6px 0;
    transition: 0.4s;
  }
  .toggle .bar1 {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-8px, 8px);
  }
  .toggle .bar2 {
    opacity: 0;
  }
  .toggle .bar3 {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
  }
`;

const ResponsiveMenuBar = () => {
  const [menuToggler, setMenuToggle] = useState('toggle');

  function toggleHandler() {
    if (menuToggler === 'toggle') {
      return setMenuToggle('');
    }
    return setMenuToggle('toggle');
  }

  return (
    <HambergerMenu expand={menuToggler} onClick={toggleHandler}>
      <div className={`${menuToggler} bar1`} />
      <div className={`${menuToggler} bar2`} />
      <div className={`${menuToggler} bar3`} />
    </HambergerMenu>
  );
};
export default ResponsiveMenuBar;
