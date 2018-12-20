import React, {Suspense, lazy} from 'react';
import styled from 'styled-components';
import accounting from 'accounting';
import {
  Index,
  Name,
  MarketCapWrapper,
  PriceWrapper,
  ChangeWrapper,
  ATHWrapper,
  VolumeWrapper,
  SupplyWrapper,
  PriceGraph,
} from '../ColumeLayoutCommon/ColumnLayoutCommon';

const SummaryInfo = lazy(() => import('../SummaryInfo'));

const ColumnContainer = styled.div`
  width: 100%; /** LAYOUT */
  padding: 10px 1rem;

  display: flex; /** CHILD */

  font-family: 'Roboto Slap', sans-serif; /** FONT */
  font-size: 14px;
  color: #93979e;

  background-color: #f5f7fa; /** EFFECT */
`;

const SortIconWrapper = styled.div`
  opacity: 0;
  visibility: hidden;
  margin: 0px 3px 5px 0px;

  &.selected {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.2s linear;
  }
`;

const ColNameWrapper = styled.div`
  color: #93979e;
  transition: color 0.3s ease-out;

  &:hover {
    color: #383838;
    transition: color 0.3s ease;
  }
`;

const InfoIcon = styled.div`
  margin: 0px 5px;
  color: #bbbbbb;

  &:hover {
    color: black;
    transition: color 0.3s ease;

    + span {
      opacity: 1;
      transition: all 0.2s ease-in;
      visibility: visible;
    }
  }
`;

const MarketCap = ({selected, setSelected}) => (
  <MarketCapWrapper onClick={() => setSelected('MarketCap')}>
    <SortIconWrapper className={selected === 'MarketCap' ? 'selected' : ''}>
      <i className="fas fa-sort-down" />
    </SortIconWrapper>
    <ColNameWrapper>Market Cap</ColNameWrapper>
    <InfoIcon className="fas fa-info-circle" />
    <SummaryInfo
      title="Market Cap Summary"
      average={accounting.formatMoney(159746435)}
      median={accounting.formatMoney(3184840)}
      percentile25={accounting.formatMoney(918841)}
      percentile75={accounting.formatMoney(11444634)}
    />
  </MarketCapWrapper>
);

const Price = ({selected, setSelected}) => (
  <PriceWrapper onClick={() => setSelected('Price')}>
    <SortIconWrapper className={selected === 'Price' ? 'selected' : ''}>
      <i className="fas fa-sort-down" />
    </SortIconWrapper>
    <ColNameWrapper>Price</ColNameWrapper>
    <InfoIcon className="fas fa-info-circle" />
    <SummaryInfo
      title="Price Summary"
      average={accounting.formatMoney(6.00165)}
      median={accounting.formatMoney(0.01558)}
      percentile25={accounting.formatMoney(0.00277)}
      percentile75={accounting.formatMoney(0.1117)}
    />
  </PriceWrapper>
);
const Change = ({selected, setSelected}) => (
  <ChangeWrapper onClick={() => setSelected('Change')}>
    <SortIconWrapper className={selected === 'Change' ? 'selected' : ''}>
      <i className="fas fa-sort-down" />
    </SortIconWrapper>
    <ColNameWrapper>Change</ColNameWrapper>
    <InfoIcon className="fas fa-info-circle" />
    <SummaryInfo
      title="Price Change Summary"
      average={`${1.23}%`}
      median={`${0.85}%`}
      percentile25={`${-4.99}%`}
      percentile75={`${4.0}%`}
      change
    />
  </ChangeWrapper>
);

const ATH = ({selected, setSelected}) => (
  <ATHWrapper onClick={() => setSelected('ATH')}>
    <SortIconWrapper className={selected === 'ATH' ? 'selected' : ''}>
      <i className="fas fa-sort-down" />
    </SortIconWrapper>
    <ColNameWrapper>ATH</ColNameWrapper>
    <InfoIcon className="fas fa-info-circle" />
    <SummaryInfo
      title="All-Time High Summary"
      average={`${7.27}%`}
      median={`${2.84}%`}
      percentile25={`${1.34}%`}
      percentile75={`${7.38}%`}
    />
  </ATHWrapper>
);

const Volume = ({selected, setSelected}) => (
  <VolumeWrapper onClick={() => setSelected('Volume')}>
    <SortIconWrapper className={selected === 'Volume' ? 'selected' : ''}>
      <i className="fas fa-sort-down" />
    </SortIconWrapper>
    <ColNameWrapper>Volume</ColNameWrapper>
    <InfoIcon className="fas fa-info-circle" />
    <SummaryInfo
      title="Volume Summary"
      average={accounting.formatMoney(2038345)}
      median={accounting.formatMoney(3004.11)}
      percentile25={accounting.formatMoney(209.21)}
      percentile75={accounting.formatMoney(50604.01)}
    />
  </VolumeWrapper>
);

const Supply = ({selected, setSelected}) => (
  <SupplyWrapper onClick={() => setSelected('Supply')}>
    <SortIconWrapper className={selected === 'Supply' ? 'selected' : ''}>
      <i className="fas fa-sort-down" />
    </SortIconWrapper>
    <ColNameWrapper>Calculating Supply</ColNameWrapper>
    <InfoIcon className="fas fa-info-circle" />
    <SummaryInfo
      title="% in Circulation Summary"
      average={`${1.47}%`}
      median={`${1.64}%`}
      percentile25={`${23.36}%`}
      percentile75={`${78.89}%`}
      note={[
        'Note: Currencies with unlimited supplies are not',
        'factored in to this data',
      ]}
    />
  </SupplyWrapper>
);

const ContentColumn = ({selected, setSelected}) => (
  // console.log(selected);
  <Suspense fallback={<div>Loading...</div>}>
    <ColumnContainer>
      <Index>#</Index>
      <Name onClick={() => setSelected('Name')}>
        <SortIconWrapper className={selected === 'Name' ? 'selected' : ''}>
          <i className="fas fa-sort-down" />
        </SortIconWrapper>
        <ColNameWrapper>Name</ColNameWrapper>
      </Name>
      <MarketCap selected={selected} setSelected={setSelected} />
      <Price selected={selected} setSelected={setSelected} />
      <Change selected={selected} setSelected={setSelected} />
      <ATH selected={selected} setSelected={setSelected} />
      <Volume selected={selected} setSelected={setSelected} />
      <Supply selected={selected} setSelected={setSelected} />
      <PriceGraph>PriceGraph</PriceGraph>
    </ColumnContainer>
  </Suspense>
);
export default ContentColumn;
