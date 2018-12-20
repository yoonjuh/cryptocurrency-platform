import React from 'react';
import styled from 'styled-components';
import {
  numberPrettier,
  changePrettier,
  athPrettier,
} from '../../../utils/helpers';
import {
  Index,
  Name,
  MarketCap,
  Price,
  Change,
  ATH,
  Volume,
  PriceGraph,
  InfoIcon,
} from '../ColumeLayoutCommon/ColumnLayoutCommon';
import SupplySummary from '../SupplySummary';
import SupplyContent from '../SupplyContent';

const ItemWrapper = styled.div`
  max-width: 100%; /** LAYOUT */
  min-width: 100%;
  padding: 10px 15px;
  line-height: 1.2;

  display: flex; /** CHILD */

  font-size: 1rem; /** FONT */
  font-family: 'Roboto Slap', sans-serif;

  color: #484848; /** EFFECT */
  border-bottom: 0.2px grey solid;
  letter-spacing: 2px;
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

const ContentsItem = ({
  item: {
    currency,
    price,
    availableSupply,
    maxSupply,
    open,
    openVolume,
    volume,
    close,
    ath,
  },
  index,
}) => (
  <ItemWrapper>
    <Index>{index}</Index>
    <Name styles={{fontSize: '1.2rem', fontWeight: 500}}>{currency}</Name>
    <MarketCap styles={{cursor: 'auto'}}>
      {numberPrettier(price * availableSupply)}
    </MarketCap>
    <Price styles={{cursor: 'auto'}}>{numberPrettier(price)}</Price>
    <Change
      stules={{cursor: 'auto'}}
      clsName={
        parseFloat(changePrettier(((open - close) / close) * 100)) <= 0.0
          ? 'negative'
          : 'positive'
      }
    >
      {changePrettier(((open - close) / close) * 100)}
    </Change>
    <ATH styles={{cursor: 'auto'}}>
      <div>{athPrettier(price, ath.price)}</div>
      <InfoIconWrapper className="fas fa-info-circle" />
    </ATH>
    <Volume styles={{cursor: 'auto'}}>{numberPrettier(volume)}</Volume>
    <SupplyContent availableSupply={availableSupply} maxSupply={maxSupply} />
    <PriceGraph>
      PriceChart
      {/* <PriceChart /> */}
    </PriceGraph>
  </ItemWrapper>
);
export default ContentsItem;
