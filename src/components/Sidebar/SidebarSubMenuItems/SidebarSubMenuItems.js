import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import MenuTogglerButton from '../../Footer/MeneToggleButton';
import SubMenu from '../../Footer/SubMenu';

const SidebarItemWrapper = styled.div`
  /* padding-bottom: ${props => (props.expand ? '0rem' : '1rem')}; */
  margin-bottom: 1rem;
  cursor: pointer;

  .nav-item-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover {
      .nav-title-wrapper {
        color: white;
        transition: color 0.5s ease;
      }
    }
  }

  .nav-title-wrapper {
    color: ${props => (props.activated ? 'white' : '#93979e')};
    transition: color 0.3s ease;
    font-size: 1.3rem;
    font-family: 'Raleway', sans-serif;
  }
`;

const Foldable = styled.div.withConfig({displayName: 'Foldable'})`
  overflow: hidden;
  height: ${props => (props.toggler ? '100%' : '0rem')};
  opacity: ${props => (props.toggler ? '1' : '0')};
  padding: 0px 15px;
  transition: opacity 0.5s ease-in-out;
  transition: height 1s ease;

  font-size: 2rem;
`;

const SidebarSubMenuItems = ({
  name,
  subNav,
  currentActive,
  setCurrentActive,
}) => {
  const [expand, setExpand] = useState(false);

  return (
    <SidebarItemWrapper
      onClick={() => {
        setCurrentActive(name);
        setExpand(!expand);
      }}
      expand={expand}
      name={name}
      activated={currentActive === name}
    >
      <div className="nav-item-container">
        <div className="nav-title-wrapper" key={subNav}>
          {name}
        </div>
        <MenuTogglerButton navToggler={expand} />
      </div>
      <Foldable toggler={expand}>
        <SubMenu
          navLink={subNav}
          styles={{fontSize: '1.1rem', padding: '1rem 0rem 0rem 0rem'}}
        />
      </Foldable>
    </SidebarItemWrapper>
  );
};

export default SidebarSubMenuItems;
