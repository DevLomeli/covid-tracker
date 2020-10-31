import axios from "axios";
import { FETCH_COUNTRYDATA } from "./types";
export const fetchCountryStatus = (country) => async (dispatch) => {
  const res = await axios.get(
    `https://api.covid19api.com/dayone/country/${country}`
  );
  dispatch({
    type: FETCH_COUNTRYDATA,
    payload: res.data[res.data.length - 1],
  });
};
