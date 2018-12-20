import React, {Fragment} from 'react';
import styled from 'styled-components';

const NavItem = styled.div`
  padding: 12px 10px; /** LAYOUT */

  display: flex; /** CHILD */
  justify-content: center;
  align-items: center;

  font-size: 15px; /** FONT */
  font-family: 'Roboto Slap', sans-serif;

  cursor: pointer; /** EFFECT */
  color: #93979e;

  &:hover {
    color: white;
    transition: color 0.5s ease;
  }
  &.selected {
    color: white;
    border-bottom: 3px red solid;
    transition: all 0.3s ease;
    padding: 12px 10px 9px 10px;
  }
`;

const BodyNavItems = ({nav, onClickHandler}) => (
  <Fragment>
    {['Day', 'Week', 'Month', 'Year', 'YTD'].map(item => (
      <NavItem
        key={item}
        className={nav === item ? 'selected' : ''}
        onClick={() => onClickHandler(item)}
      >
        {item}
      </NavItem>
    ))}
  </Fragment>
);

export default BodyNavItems;
