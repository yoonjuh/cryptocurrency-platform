import React from 'react';
import {
  ChangeWrapper,
  ColNameWrapper,
  InfoIcon,
} from '../../ColumeLayoutCommon/ColumnLayoutCommon';
import SummaryInfo from '../../../SummaryInfo';
import SortUpDownIcon from '../../SortUpDownIcon';

const ColChange = ({selected: {name, asc}, setSelected}) => (
  <ChangeWrapper onClick={() => setSelected({name: 'Change', asc: !asc})}>
    <SortUpDownIcon name={name} asc={asc} match="Change" />
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
export default ColChange;
