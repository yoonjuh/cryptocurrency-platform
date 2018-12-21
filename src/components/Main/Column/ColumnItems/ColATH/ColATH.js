import React from 'react';
import {
  ATHWrapper,
  ColNameWrapper,
  InfoIcon,
} from '../../ColumeLayoutCommon/ColumnLayoutCommon';
import SummaryInfo from '../../../SummaryInfo';
import SortUpDownIcon from '../../SortUpDownIcon';

const ColATH = ({selected: {name, asc}, setSelected}) => (
  <ATHWrapper onClick={() => setSelected({name: 'ATH', asc: !asc})}>
    <SortUpDownIcon name={name} asc={asc} match="ATH" />
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
export default ColATH;
