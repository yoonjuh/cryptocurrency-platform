import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {isEmpty} from 'ramda';
import {arrayConcater} from '../../../utils/helpers';
import ContentItem from '../../../components/Main/ContentItem';
import BodySearchBar from '../../../components/Main/BodySearchBar';
import ContentColumn from '../../../components/Main/ContentColumn';
import BodyNav from '../BodyNav';
import BodyIntro from '../../../components/Main/BodyHeader/BodyIntro';
import {getDashboardData} from '../../../store/actions/dashboard';
import {
  sortByDay,
  sortByWeek,
  sortByMonth,
  sortByYear,
} from '../../../store/actions/sortBy';
import {getAllPrice} from '../../../store/actions/price';

const Container = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 3rem;
`;

const MainBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: white;
  outline: none;
  border: none;
`;

const BodyContainer = props => {
  const [term, setTerm] = useState('');
  const [selected, setSelected] = useState('');
  const [nav, setNav] = useState('Day');
  const {dashboard, price, sortBy} = props;
  const merged = arrayConcater(dashboard, price);

  useEffect(() => {
    props.getDashboardData();
    props.getAllPrice();
  }, []);

  function onClickHandler(item) {
    if (item === 'Day') {
      props.sortByDay(merged);
    } else if (item === 'Week') {
      props.sortByWeek(merged);
    } else if (item === 'Month') {
      props.sortByMonth(merged);
    } else {
      props.sortByYear(merged);
    }

    return setNav(item);
  }

  function resetSearch() {
    setTerm('');
  }

  useEffect(() => {
    props.sortByDay(merged);
  }, []);
  // console.log(sortBy);

  return (
    <Container>
      <BodyIntro />
      <BodyNav nav={nav} onClickHandler={onClickHandler} />
      <MainBodyWrapper>
        <BodySearchBar
          term={term}
          setTerm={setTerm}
          resetSearch={resetSearch}
        />
        <ContentColumn selected={selected} setSelected={setSelected} />
        {sortBy &&
          sortBy.map((item, i) => (
            <ContentItem index={i} item={item} key={item.currency} />
          ))}
      </MainBodyWrapper>
    </Container>
  );
};
export default connect(
  ({dashboard, price, sortBy}) => ({
    dashboard,
    price,
    sortBy,
  }),
  {
    getDashboardData,
    getAllPrice,
    sortByDay,
    sortByWeek,
    sortByMonth,
    sortByYear,
  }
)(BodyContainer);
