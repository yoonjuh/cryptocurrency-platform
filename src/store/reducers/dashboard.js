import {GET_DASHBOARD_DATA_SUCCESS} from '../constants';

const dashboardReducer = (state = [], action) => {
  switch (action.type) {
    case GET_DASHBOARD_DATA_SUCCESS: {
      return action.data;
    }
    default:
      return state;
  }
};

export default dashboardReducer;
