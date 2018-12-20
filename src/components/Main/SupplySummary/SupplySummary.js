import React from 'react';
import styled from 'styled-components';

const SummaryWrapper = styled.span`
  position: absolute; /** LAYOUT */
  margin-top: 2rem;
  z-index: 999;
  top: 50;
  padding: 20px 2rem;

  display: flex; /** CHILD */
  flex-direction: column;

  font-family: 'Roboto Slap', sans-serif; /** FONT */

  overflow: hidden; /** EFFECT */
  word-break: keep-all;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease-out;
  background-color: white;
  outline: none;
  box-shadow: -5px 5px 20px 0px darkgrey;

  .summary-info_title {
    margin: 0px 3rem 1rem 3rem; /** LAYOUT */
    width: 100%;

    font-size: 1rem; /** FONT */
    font-weight: 500;
    color: #202020;

    display: flex; /** CHILD */
    justify-content: center;
    align-items: center;
    white-space: nowrap;
  }
  .summary-info_content {
    width: 100;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }

  .supply-lower-container {
    margin-top: 5px;
    width: 100%;
    background-color: #e0e0e0;
    height: 5px;
  }

  .supply-graph-bar {
    width: ${props => props.progress};
    background-color: #707070;
    height: 5px;
  }
`;

const SupplySummary = ({title, current, maxSupply, percent}) => (
  <SummaryWrapper progress={`${percent}%`}>
    <div className="summary-info_title">{title}</div>
    <div className="summary-info_content">
      <div>Current Supply</div>
      <div>{current}</div>
    </div>

    <div className="summary-info_content">
      <div>Max Supply</div>
      <div>{maxSupply}</div>
    </div>

    <div className="summary-info_content">
      <div>Percent in Circulation</div>
      <div>{`${percent}%`}</div>
    </div>
    <div className="supply-lower-container">
      <div className="supply-graph-bar" />
    </div>
  </SummaryWrapper>
);

export default SupplySummary;
