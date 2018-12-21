import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import BodyNavItems from '../../../components/Main/BodyNavItems';

const BodyNavContainer = styled.div`
  width: 100%;
  /* flex: 1; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.7rem;
  padding: 0rem 2rem;
  background-color: #18191a;
  color: #93979e;
  position: relative;
  top: auto;

  &.sticky {
    z-index: 9999;
    position: fixed;
    top: 0;
    right: 0;
    box-sizing: border-box;

    @media screen and (max-width: 1440px) {
      width: 1440px;
    }
  }
`;
const NavSection = styled.div`
  display: flex;
`;
const DropdownSection = styled.div`
  font-size: 1rem;
`;

const BodyNav = ({nav, onClickHandler}) => {
  const [sticky, setSticky] = useState('');

  useEffect(() => {
    const stickyNav = document.querySelector('#sticky-nav');

    window.addEventListener('scroll', () => {
      if (stickyNav.offsetTop <= window.pageYOffset && sticky !== 'sticky') {
        setSticky('sticky');
      }

      if (window.pageYOffset < 216 && stickyNav.offsetTop <= 216) {
        setSticky('');
      }
    });
  }, []);

  return (
    <BodyNavContainer id="sticky-nav" className={sticky}>
      <NavSection>
        <BodyNavItems nav={nav} onClickHandler={onClickHandler} />
      </NavSection>
      <DropdownSection>Dropdown Section</DropdownSection>
    </BodyNavContainer>
  );
};
export default BodyNav;
