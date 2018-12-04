import React, {Fragment} from 'react';
import styled from 'styled-components';
import img from '../../../img/free_logo2.png';

const Logo = styled.img`
  width: 5rem;

  @media screen and (max-width: 960px) {
    width: 2.7rem;
  }
`;
const CompanyTitle = styled.div`
  font-weight: 400;
  font-size: 1.7rem;
  color: white;
  margin-left: 10px;
  font-family: 'Righteous', sans-serif;

  @media screen and (min-width: 960px) {
    margin: 10px 0px;
    font-weight: 600;
    font-size: 2rem;
  }
`;

const LogoWrapper = () => (
  <Fragment>
    <Logo src={img} />
    <CompanyTitle>Examples</CompanyTitle>
  </Fragment>
);
export default LogoWrapper;
