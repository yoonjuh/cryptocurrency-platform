import React from 'react';
import styled from 'styled-components';

const SummaryWrapper = styled.span`
  position: absolute; /** LAYOUT */
  margin-top: 8rem;
  padding: 20px 2rem;

  display: flex; /** CHILD */
  flex-direction: column;

  font-family: 'Roboto Slap', sans-serif; /** FONT */

  overflow: hidden; /** EFFECT */
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease-out;
  background-color: white;
  outline: none;
  box-shadow: -5px 5px 20px 0px darkgrey;

  .summary-info_title {
    margin: 0px 3rem 1rem 3rem; /** LAYOUT */

    font-size: 1rem; /** FONT */
    font-weight: 500;
    color: #202020;

    display: flex; /** CHILD */
    justify-content: center;
  }

  .summary-info_content {
    padding: 5px 0px; /** LAYOUT  */

    display: flex; /** CHILD */
    justify-content: space-between;
  }

  .summary-info_note {
    padding-top: 10px;
    font-size: 14px;
  }

  &.change {
    .summary-info_content {
      .negative {
        color: rgb(255, 0, 21);
      }

      .positive {
        color: rgb(0, 224, 142);
      }
    }
  }
`;

const SummaryInfo = ({
  title,
  average,
  median,
  percentile25,
  percentile75,
  note,
  change,
}) => (
  <SummaryWrapper className={change ? 'change' : ''}>
    <div className="summary-info_title">{title}</div>
    <div className="summary-info_content">
      <div>Average</div>
      <div className={parseFloat(average) < 0 ? 'negative' : 'positive'}>
        {average}
      </div>
    </div>

    <div className="summary-info_content">
      <div>Median</div>
      <div className={parseFloat(median) < 0 ? 'negative' : 'positive'}>
        {median}
      </div>
    </div>

    <div className="summary-info_content">
      <div>25th Percentile</div>
      <div className={parseFloat(percentile25) < 0 ? 'negative' : 'positive'}>
        {percentile25}
      </div>
    </div>

    <div className="summary-info_content">
      <div>75th Percentile</div>
      <div className={parseFloat(percentile75) < 0 ? 'negative' : 'positive'}>
        {percentile75}
      </div>
    </div>
    {note ? (
      <div className="summary-info_note">
        <div>{note[0]}</div>
        <div>{note[1]}</div>
      </div>
    ) : (
      ''
    )}
  </SummaryWrapper>
);

export default SummaryInfo;
