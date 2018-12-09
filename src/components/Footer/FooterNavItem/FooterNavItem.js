import React, {useState} from 'react';
import styled from 'styled-components';
import SocialMedia from '../SocialMedia';
import MenuTogglerButton from '../MeneToggleButton';
import SubMenu from '../SubMenu';

const ItemWrapper = styled.div.withConfig({displayName: 'ItemWrapper'})`
  line-height: 1.2;
  flex: 1;
  border-top: 0.5px #909090 solid;

  .container-layout-padding {
    padding: 1rem 1.5rem 1rem 1rem;
  }

  @media screen and (min-width: 960px) {
    border: none;
    padding: 0px;
  }
`;
const NavTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: ${props => (props.toggler ? '15px' : '')};
  transition: all 0.3s ease-out;
  @media screen and (min-width: 960px) {
    padding-bottom: 15px;
  }
`;
const NavTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: ${props => (props.toggler ? '12px' : '13px')};
  transition: all 0.3s ease-in;
  color: white;
  font-family: 'Roboto Slab', sans-serif;
  word-wrap: keep-all;
  @media screen and (min-width: 960px) {
    font-size: 15px;
  }
`;
const Foldable = styled.div`
  overflow: hidden;
  height: ${props => (props.toggler ? '100%' : '0rem')};
  @media only screen and (min-width: 960px) {
    height: 100%;
  }
`;

const FooterNavItem = ({navTitle, navLink}) => {
  const [navToggler, setNavToggler] = useState(false);
  return (
    <ItemWrapper onClick={() => setNavToggler(!navToggler)}>
      <div className="container-layout-padding">
        <NavTitleWrapper toggler={navToggler}>
          <NavTitle toggler={navToggler}>{navTitle}</NavTitle>
          <MenuTogglerButton
            navTitle={navTitle}
            navToggler={navToggler}
            clsName={navToggler ? 'fas fa-angle-down' : 'fas fa-angle-up'}
          />
        </NavTitleWrapper>
        <Foldable toggler={navToggler}>
          <SubMenu navLink={navLink} />
          <SocialMedia navTitle={navTitle} />
        </Foldable>
      </div>
    </ItemWrapper>
  );
};
export default FooterNavItem;
