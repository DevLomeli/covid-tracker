import { FETCH_COUNTRYDATA } from "../actions/types";

const covidReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_COUNTRYDATA:
      return action.payload;
    default:
      return state;
  }
};

export default covidReducer;
