import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const CopyRightWrapper = styled.div`
  background-color: #181818;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 25px;
  line-height: 1.3;

  .copy-right-text {
    color: #989898;
    font-size: 12px;
    font-family: 'Robato Slap', sans-serif;
    display: flex;
    align-items: center;
    & .dev {
      padding-right: 3px;
      margin-bottom: 8px;
      font-size: 8px;
    }
  }

  .copy-right-link {
    color: #909090;
    font-size: 13px;
    font-family: 'Roboto Slap', sans-serif;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #909090;
  margin: 0px 5px;

  &:hover {
    color: white;
    font-weight: 500;
    transition: all 0.5s;
  }
`;

const CopyRight = () => (
  <CopyRightWrapper>
    <div className="copy-right-text">
      © 2018 Edwin Yoon<div className="copy-right-text dev">Dev</div> | All
      Rights Reserved
    </div>
    <div className="copy-right-link">
      <StyledLink to="/terms-and-conditions">Terms</StyledLink>
      {'|'}
      <StyledLink to="/privacy-policy">Policy</StyledLink>
    </div>
  </CopyRightWrapper>
);
export default CopyRight;
