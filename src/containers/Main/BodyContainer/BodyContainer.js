import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import BodySearchBar from '../../../components/Main/BodySearchBar';
import ContentColumn from '../../../components/Main/Column/ContentColumn';
import BodyNav from '../BodyNav';
import BodyIntro from '../../../components/Main/BodyHeader/BodyIntro';
import {getDashboardData} from '../../../store/actions/dashboard';
import {
  sortByDay,
  sortByWeek,
  sortByMonth,
  sortByYear,
  sortByName,
  sortByMarketCap,
  sortByPrice,
  sortByChange,
  sortByATH,
  sortByVolume,
  sortBySupply,
} from '../../../store/actions/sortBy';
import {getAllTimeHigh} from '../../../store/actions/ath';
import {getAllPrice} from '../../../store/actions/price';
import ContentItems from '../../../components/Main/ContentItems';

const Container = styled.div`
  width: 100%; /** LAYOUT */
  min-height: 100%;

  display: flex; /** CHILD */
  flex-direction: column;

  font-size: 3rem; /** FONT */
`;

const MainBodyWrapper = styled.div`
  width: 100%; /** LAYOUT */

  display: flex; /** CHILD */
  flex-direction: column;
  align-items: center;

  background-color: white; /** EFFECT */
  outline: none;
  border: none;
`;

const BodyContainer = props => {
  const [term, setTerm] = useState('');
  const [selected, setSelected] = useState({name: '', asc: true});
  const [nav, setNav] = useState('Day');
  const {dashboard, price, sortBy, ath} = props;

  useEffect(() => {
    props.getDashboardData();
  }, []);

  useEffect(
    () => {
      props.sortByDay(dashboard);
    },
    [dashboard]
  );

  useEffect(
    () => {
      const {name, asc} = selected;
      if (name === 'Name') {
        props.sortByName(sortBy, asc);
      } else if (name === 'MarketCap') {
        props.sortByMarketCap(sortBy, asc);
      } else if (name === 'Price') {
        props.sortByPrice(sortBy, asc);
      } else if (name === 'ATH') {
        props.sortByATH(sortBy, asc);
      } else if (name === 'Change') {
        props.sortByChange(sortBy, asc);
      } else if (name === 'Volume') {
        props.sortByVolume(sortBy, asc);
      } else if (name === 'Supply') {
        props.sortBySupply(sortBy, asc);
      }
    },
    [selected]
  );

  function onChangeHandler({target: {value}}) {
    setTerm(value);
  }

  function onClickHandler(item) {
    if (item === 'Day') {
      props.sortByDay(dashboard);
    } else if (item === 'Week') {
      props.sortByWeek(dashboard);
    } else if (item === 'Month') {
      props.sortByMonth(dashboard);
    } else {
      props.sortByYear(dashboard);
    }

    return setNav(item);
  }

  return (
    <Container>
      <BodyIntro nav={nav} />
      <BodyNav nav={nav} onClickHandler={onClickHandler} />
      <MainBodyWrapper>
        <BodySearchBar
          term={term}
          onChangeHandler={onChangeHandler}
          setTerm={setTerm}
        />
        <ContentColumn selected={selected} setSelected={setSelected} />
        <ContentItems term={term} sortBy={sortBy} />
      </MainBodyWrapper>
    </Container>
  );
};
export default connect(
  ({dashboard, price, sortBy, ath}) => ({
    dashboard,
    price,
    sortBy,
    ath,
  }),
  {
    getDashboardData,
    getAllPrice,
    sortByDay,
    sortByWeek,
    sortByMonth,
    sortByYear,
    getAllTimeHigh,
    sortByName,
    sortByMarketCap,
    sortByPrice,
    sortByChange,
    sortByATH,
    sortByVolume,
    sortBySupply,
  }
)(BodyContainer);
