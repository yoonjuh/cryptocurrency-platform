import React from 'react';
import accounting from 'accounting';
import {
  VolumeWrapper,
  ColNameWrapper,
  InfoIcon,
} from '../../ColumeLayoutCommon/ColumnLayoutCommon';
import SummaryInfo from '../../../SummaryInfo';
import SortUpDownIcon from '../../SortUpDownIcon';

const ColVolume = ({selected: {name, asc}, setSelected}) => (
  <VolumeWrapper onClick={() => setSelected({name: 'Volume', asc: !asc})}>
    <SortUpDownIcon name={name} asc={asc} match="Volume" />
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
export default ColVolume;
