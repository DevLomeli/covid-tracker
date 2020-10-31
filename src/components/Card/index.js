import React from "react";
import { CardContainer, CardTitle, CardInfo } from "./CardElements";
const Card = ({ title, count }) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardInfo>{count}</CardInfo>
    </CardContainer>
  );
};

export default Card;
