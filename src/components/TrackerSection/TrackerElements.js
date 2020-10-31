import styled from "styled-components";

export const TrackerContainer = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  height: 100vh;
  justify-content: space-around;
`;

export const TrackerTitle = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.7rem;
`;

export const TrackerCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 25%);
  justify-content: center;
  column-gap: 1rem;
`;
