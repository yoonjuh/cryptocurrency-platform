import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: #909090;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding-bottom: 5px;

  .contents-wrapper {
    font-size: 14px;
    text-decoration: none;
    padding: 4px 0px;
    color: #909090;
    font-family: 'Raleway', sans-serif;

    @media only screen and (min-width: 960px) {
      font-size: 15px;
    }
  }
  &:hover {
    .contents-wrapper {
      color: white;
      transition: color 0.5s ease;
    }
  }
`;

const SubMenu = ({navLink, styles}) => (
  <Fragment>
    {navLink &&
      navLink.map(({name, to}) => (
        <LinkWrapper to={to} key={name}>
          <div className="contents-wrapper" to={to} style={styles && styles}>
            {name}
          </div>
        </LinkWrapper>
      ))}
  </Fragment>
);
export default SubMenu;
