import React from 'react';
import {
  SupplyWrapper,
  ColNameWrapper,
  InfoIcon,
} from '../../ColumeLayoutCommon/ColumnLayoutCommon';
import SummaryInfo from '../../../SummaryInfo';
import SortUpDownIcon from '../../SortUpDownIcon';

const ColSupply = ({selected: {name, asc}, setSelected}) => (
  <SupplyWrapper onClick={() => setSelected({name: 'Supply', asc: !asc})}>
    <SortUpDownIcon name={name} asc={asc} match="Supply" />
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
export default ColSupply;
