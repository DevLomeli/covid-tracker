import styled from "styled-components";

export const CardContainer = styled.div`
  background: #fff;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  align-items: center;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const CardTitle = styled.h2`
  text-align: center;
`;

export const CardInfo = styled.p`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
`;
