import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.button`
  margin-right: 30px;
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 5px 5px;
  transition: all 0.2s ease;

  .bars {
    width: 30px;
    height: 2px;
    /* border: 6px white solid; */
    background-color: white;
    border-radius: 5px;
    z-index: 9999;
  }
  &:hover {
    cursor: pointer;
    .bm-bar_1 {
      transform: translate(0px, -3px);
      transition: all 0.2s linear;
    }

    .bm-bar_3 {
      transform: translate(0px, 3px);
      transition: all 0.2s linear;
    }
  }
  .toggle:nth-child(1n) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg) translate(-6px, 5px);
    width: 25px;
    box-shadow: 1px 1px darkgray;
  }
  .toggle:nth-child(2n) {
    opacity: 0;
    transform: rotate(0deg) translate(0px, 0px);
    transition: opacity 1s ease-out;
  }
  .toggle:nth-child(3n) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg) translate(-10px, -10px);
    width: 25px;
  }
  @media screen and (min-width: 960px) {
    display: none;
  }
`;

const BurgerMenu = ({menuToggler, onClickHandler}) => (
  <MenuContainer onClick={onClickHandler}>
    {[1, 2, 3].map(barNum => (
      <span
        className={`bars bm-bar_${barNum} ${menuToggler ? 'toggle' : ''}`}
        key={barNum}
      />
    ))}
  </MenuContainer>
);
export default BurgerMenu;
