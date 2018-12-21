import React from 'react';
import accounting from 'accounting';
import {
  PriceWrapper,
  ColNameWrapper,
  InfoIcon,
} from '../../ColumeLayoutCommon/ColumnLayoutCommon';
import SummaryInfo from '../../../SummaryInfo';
import SortUpDownIcon from '../../SortUpDownIcon';

const ColPrice = ({selected: {name, asc}, setSelected}) => (
  <PriceWrapper onClick={() => setSelected({name: 'Price', asc: !asc})}>
    <SortUpDownIcon name={name} asc={asc} match="Price" />
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
export default ColPrice;
