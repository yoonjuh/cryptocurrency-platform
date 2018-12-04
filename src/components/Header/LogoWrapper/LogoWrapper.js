import React, {Fragment} from 'react';
import styled from 'styled-components';
import img from '../../../img/free_logo2.png';

const Logo = styled.img`
  width: 3.5rem;
  height: 3.5rem;
`;
const TitleWrapper = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CompanyDesc = styled.div`
  color: white;
  font-size: 12px;
  font-family: 'Robato Slap', sans-serif;
`;
const CompanyTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  color: white;
  font-family: 'Righteous', sans-serif;
`;

const LogoWrapper = () => (
  <Fragment>
    <Logo src={img} />
    <TitleWrapper>
      <CompanyTitle>Examples</CompanyTitle>
      <CompanyDesc>an API Company</CompanyDesc>
    </TitleWrapper>
  </Fragment>
);
export default LogoWrapper;
