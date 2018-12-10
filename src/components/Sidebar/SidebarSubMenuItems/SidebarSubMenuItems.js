import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import MenuTogglerButton from '../../Footer/MeneToggleButton';
import SubMenu from '../../Footer/SubMenu';

const SidebarItemWrapper = styled.div`
  /* padding-bottom: ${props => (props.expand ? '0rem' : '1rem')}; */
  margin-bottom: 1rem;
  cursor: pointer;
  /* z-index: 5; */

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

// height: ${props => (props.toggler ? '100%' : '0rem')};
/* transition: opacity 0.7s ease; */
const Foldable = styled.div`
  max-height: 0;
  overflow: auto;
  visibility: hidden;
  padding: 0px 15px;
  transition: all 0.3s ease-in-out;

  /* -webkit-transform: translate3d(0, 0, 0); */
  &.expanded {
    visibility: visible;
    max-height: 900px;
    z-index: 9;
  }

  font-size: 2rem;
`;
// transition: height 0.4s ease-in-out;

const SidebarSubMenuItems = ({
  name,
  subNav,
  currentActive,
  setCurrentActive,
  menuToggler,
}) => {
  const [expand, setExpand] = useState(false);

  function resetState() {
    /**
     * WHEN USER TOGGLE SIDEBAR AFTER EXPAND SOME SUB MENUS,
     * THEN, THIS METHOD WILL BE CALLED TO CLEAN UP TES CSS EFFECTS
     */
    setCurrentActive('');
    setExpand(false);
  }

  useEffect(
    /**
     * WHEN USER TOGGLE THE SIDEBAR OFF,
     * CHECK IF ANY CSS EFFECTS HAVE INITIALIZED
     */
    () => {
      if (menuToggler) {
        return null;
      }
      return resetState(); // IF THEY ARE, RESET
    },
    [menuToggler]
  );

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
      <Foldable toggler={expand} className={expand ? 'expanded' : ''}>
        <SubMenu
          navLink={subNav}
          styles={{
            fontSize: '1.1rem',
            padding: '1rem 0rem 0rem 0rem',
            transition: 'opacity .5s ease',
          }}
        />
      </Foldable>
    </SidebarItemWrapper>
  );
};

export default SidebarSubMenuItems;
