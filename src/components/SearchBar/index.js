import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  SearchBarForm,
  SearchBarInput,
  SearchBarButton,
} from "./SearchBarElements";
import { fetchCountryStatus } from "../../actions";
const SearchBar = (props) => {
  const [country, setCountry] = useState("");
  const { fetchCountryStatus } = props;
  useEffect(() => {
    fetchCountryStatus("Mexico");
  }, []);
  const fetchCountryData = (e) => {
    e.preventDefault();
    props.fetchCountryStatus(country);
  };
  return (
    <>
      <SearchBarForm onSubmit={fetchCountryData}>
        <SearchBarInput
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <SearchBarButton>Search</SearchBarButton>
      </SearchBarForm>
    </>
  );
};

export default connect(null, { fetchCountryStatus })(SearchBar);
