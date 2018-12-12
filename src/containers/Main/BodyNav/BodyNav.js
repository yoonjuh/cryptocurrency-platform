import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const BodyNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.7rem;
  padding: 0rem 2.5rem;
  background-color: #18191a;
  color: #93979e;
  position: relative;
  top: auto;

  &.sticky {
    /* padding-top: 217px; */
    position: fixed;
    top: 0;
    width: 100%;
  }
`;
const NavSection = styled.div``;
const DropdownSection = styled.div``;

const BodyNav = () => {
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
      <NavSection>Nav Section</NavSection>
      <DropdownSection>Dropdown Section</DropdownSection>
    </BodyNavContainer>
  );
};
export default BodyNav;
