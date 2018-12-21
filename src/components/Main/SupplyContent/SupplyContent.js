import React, {Fragment} from 'react';
import styled from 'styled-components';
import {SupplyWrapper} from '../Column/ColumeLayoutCommon/ColumnLayoutCommon';
import SupplySummary from '../SupplySummary';
import {supplyPrettier} from '../../../utils/helpers';

const SupplyInnerWrapper = styled.div`
  width: 100%; /** LAYOUT */
  padding: 0rem 2rem;

  display: flex; /** CHILD */
  align-items: center;
`;

const SupplyValue = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .supply-upper-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .supply-title {
    padding-right: 10px;
    font-size: 12px;
    color: #8e8e8e;
  }

  .supply-value {
    display: flex;
    flex-direction: column;
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

const InfoIconWrapper = styled.div`
  margin: 0px 5px;
  color: #bbbbbb;

  &:hover {
    color: black;
    transition: color 0.3s ease;

    /* &.hoverable-summary {
      + span {
      opacity: 1;
      transition: all 0.2s ease-in;
      visibility: visible;
    } */
  }
`;

const SupplyContent = ({availableSupply, maxSupply}) => (
  <SupplyWrapper style={{cursor: 'auto'}}>
    <SupplyInnerWrapper>
      <SupplyValue
        progress={`${parseInt((availableSupply / maxSupply) * 100)}%`}
      >
        <div className="supply-upper-container">
          <div className="supply-title">SUPPLY:</div>
          <div className="supply-value">
            {supplyPrettier(parseInt(availableSupply))}
          </div>
        </div>
        {maxSupply ? (
          <div className="supply-lower-container">
            <div className="supply-graph-bar" />
          </div>
        ) : (
          ''
        )}
      </SupplyValue>
      {maxSupply ? (
        <Fragment>
          <SupplySummary
            className="hoverable-summary"
            title="Circulating Supply (IGNIS)"
            current={availableSupply}
            maxSupply={maxSupply}
            percent={parseInt((availableSupply / maxSupply) * 100)}
          />
          <InfoIconWrapper className="fas fa-info-circle" />
        </Fragment>
      ) : (
        ''
      )}
    </SupplyInnerWrapper>
  </SupplyWrapper>
);
export default SupplyContent;
