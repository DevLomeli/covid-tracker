import React from "react";
import { connect } from "react-redux";
import SearchBar from "../SearchBar";
import {
  TrackerContainer,
  TrackerTitle,
  TrackerCardsWrapper,
} from "./TrackerElements";
import Card from "../Card";
const TrackerSection = (props) => {
  const renderCard = () => {
    if (!props.StatusCountry) {
      return <p>Loading...</p>;
    }
    return (
      <>
        <Card title="Confirmed" count={props.StatusCountry.Confirmed} />
        <Card title="Deaths" count={props.StatusCountry.Deaths} />
        <Card title="Recoverd" count={props.StatusCountry.Recovered} />
      </>
    );
  };
  return (
    <TrackerContainer>
      <div>
        <TrackerTitle>Covid Tracker</TrackerTitle>
        <SearchBar />
      </div>
      <TrackerCardsWrapper>{renderCard()}</TrackerCardsWrapper>
    </TrackerContainer>
  );
};
const mapStateToProps = (state) => {
  return {
    StatusCountry: state.StatusCountry,
  };
};
export default connect(mapStateToProps, {})(TrackerSection);
