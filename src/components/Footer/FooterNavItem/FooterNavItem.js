import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components';
import {Link} from 'react-router-dom';

const ItemWrapper = styled.div.withConfig({displayName: 'ItemWrapper'})`
  line-height: 1.2;
  flex: 1;
  border-top: 0.5px #909090 solid;

  .container-layout-padding {
    padding: 1rem;
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
const NavTogglerButton = styled.div`
  color: #989898;
  font-size: 1.2rem;
  @media screen and (min-width: 960px) {
    display: none;
  }
`;
const LinkWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;
const NavLink = styled(Link)`
  font-size: 14px;
  text-decoration: none;
  padding: 4px 0px;
  color: #909090;
  font-family: 'Raleway', sans-serif;

  &:hover {
    color: white;
    transition: all 0.5s;
  }

  @media only screen and (min-width: 960px) {
    font-size: 15px;
  }
`;
const ContactIcons = styled.div`
  color: #989898;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 3px;
`;
const ContactLink = styled(Link)`
  text-decoration: none;
  color: #989898;
  &:hover {
    color: white;
    transition: all 0.5s;
  }
`;

const ContactIcon = styled.div`
  margin-right: 10px;
`;

const Foldable = styled.div`
  overflow: hidden;
  height: ${props => (props.toggler ? '100%' : '0rem')};
  @media only screen and (min-width: 960px) {
    height: 100%;
  }
`;

const Icons = [
  {
    name: 'fab fa-facebook',
    to: 'https://www.facebook.com/JuhyungEdwinYoon?ref=bookmarks',
  },
  {name: 'fab fa-twitter', to: 'https://twitter.com/'},
  {
    name: 'fab fa-linkedin-in',
    to: 'https://www.linkedin.com/in/awesome-js-dev/',
  },
];

const FooterNavItem = ({navTitle, navLink}) => {
  const [navToggler, setNavToggler] = useState(false);
  console.log(navToggler);
  return (
    <ItemWrapper onClick={() => setNavToggler(!navToggler)}>
      <div className="container-layout-padding">
        <NavTitleWrapper toggler={navToggler}>
          <NavTitle toggler={navToggler}>{navTitle}</NavTitle>
          <NavTogglerButton>
            {navToggler ? (
              <i name={navTitle} className="fas fa-angle-down" />
            ) : (
              <i name={navTitle} className="fas fa-angle-up" />
            )}
          </NavTogglerButton>
        </NavTitleWrapper>
        <Foldable toggler={navToggler}>
          {navLink &&
            navLink.map(({name, to}) => (
              <LinkWrapper>
                <NavLink key={name} to={to}>
                  {name}
                </NavLink>
              </LinkWrapper>
            ))}

          {navTitle === 'Contact' ? (
            <ContactIcons>
              {Icons.map(({name, to}) => (
                <ContactLink key={name} to={to}>
                  <ContactIcon className={name} />
                </ContactLink>
              ))}
            </ContactIcons>
          ) : (
            ''
          )}
        </Foldable>
      </div>
    </ItemWrapper>
  );
};
export default FooterNavItem;
