import React, {Fragment} from 'react';
import styled from 'styled-components';

const NavItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #93979e;
  font-size: 15px;
  padding: 12px 10px;
  font-family: 'Roboto Slap', sans-serif;

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

const BodyNavItems = ({selected, setSelected}) => (
  <Fragment>
    {['Day', 'Week', 'Month', 'Year', 'YTD'].map(item => (
      <NavItem
        key={item}
        className={selected === item ? 'selected' : ''}
        onClick={() => setSelected(item)}
      >
        {item}
      </NavItem>
    ))}
  </Fragment>
);

export default BodyNavItems;
