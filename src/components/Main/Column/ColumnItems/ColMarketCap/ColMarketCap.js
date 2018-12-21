import React from 'react';
import accounting from 'accounting';
import {
  MarketCapWrapper,
  ColNameWrapper,
  InfoIcon,
} from '../../ColumeLayoutCommon/ColumnLayoutCommon';
import SummaryInfo from '../../../SummaryInfo';
import SortUpDownIcon from '../../SortUpDownIcon';

const ColMarketCap = ({selected: {name, asc}, setSelected}) => (
  <MarketCapWrapper onClick={() => setSelected({name: 'MarketCap', asc: !asc})}>
    <SortUpDownIcon name={name} asc={asc} match="MarketCap" />
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
export default ColMarketCap;
