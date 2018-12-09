import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import SidebarItems from '../SideBarItems';
import HeaderAPIButton from '../../Header/HeaderAPIButton';

const SidebarWrapper = styled.div`
  color: white;
  opacity: 0;
  width: 0%;
  height: 0%;

  &.expand {
    background-color: #18191a;
    width: 100%;
    height: 100%;
    opacity: 1;
    transition: opacity 0.4s ease;
    display: flex;
    flex-direction: column;
    padding: 1.7rem 0.8rem;
    z-index: 5;
  }

  @media screen and (min-width: 960px) {
    transition: opacity 0.2s ease-out;
    &.expand {
      display: none;
    }
  }
`;

const SidebarItemsWrapper = styled.div`
  flex: 1;
`;

const APIButtonWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Sidebar = ({menuToggler, setMenuToggler}) => {
  const [currentActive, setCurrentActive] = useState('');
  console.log(currentActive);
  function onClickHandler(value) {
    return setCurrentActive(value);
  }

  function updateToggler() {
    const {innerWidth} = window;
    if (innerWidth < 960 || innerWidth > 980) return null;
    if (innerWidth > 960 || !menuToggler) return setMenuToggler(false);
    return setMenuToggler(false);
  }

  useEffect(() => {
    window.addEventListener('resize', updateToggler);
  }, []);

  return (
    <SidebarWrapper className={menuToggler ? 'expand' : ''}>
      <SidebarItemsWrapper>
        <SidebarItems
          currentActive={currentActive}
          onClickHandler={value => onClickHandler(value)}
          setCurrentActive={setCurrentActive}
        />
      </SidebarItemsWrapper>
      <APIButtonWrapper>
        <div style={{borderBottom: '.7px #484848 solid'}} />
        <HeaderAPIButton
          styles={{
            alignSelf: 'bottom',
            margin: '20px 0px 0px 0px',
            fontSize: '1.3rem',
            lineHeight: 1.2,
          }}
        />
      </APIButtonWrapper>
    </SidebarWrapper>
  );
};

export default Sidebar;
