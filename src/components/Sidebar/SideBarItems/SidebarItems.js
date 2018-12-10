import React, {useState, Fragment} from 'react';
import styled from 'styled-components';
import widthNavItems from '../../../StaticData/withNavItems';
import SidebarSubMenuItems from '../SidebarSubMenuItems';

const SideBarSortItem = styled.div`
  color: #93979e;
  font-size: 1.3rem;
  font-family: 'Raleway', sans-serif;
  margin-bottom: 1rem;
`;

const SidebarItems = ({
  sortByNavItems,
  sortedNavItems,
  currentActive,
  setCurrentActive,
  menuToggler,
}) => (
  <Fragment>
    {sortByNavItems.map(item => (
      <SideBarSortItem key={item}>{item}</SideBarSortItem>
    ))}
    {sortedNavItems.map(({name, subNav}) => (
      <SidebarSubMenuItems
        key={name + subNav}
        name={name}
        subNav={subNav}
        currentActive={currentActive}
        setCurrentActive={setCurrentActive}
        menuToggler={menuToggler}
      />
    ))}
  </Fragment>
);

export default widthNavItems(SidebarItems);
