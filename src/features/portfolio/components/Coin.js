import React from "react";
import styled from "styled-components";

const StyledCoin = styled.div`
  padding: 20px 0;
  background-color: transparent;
  display: flex;
  align-items: center;
  color: ${props => props.theme.primary};
  border-bottom: 1px solid ${props => props.theme.borderColor};
`;

const Symbol = styled.span`
  text-transform: uppercase;
  font-size: 0.8rem;
  margin-right: 20px;
`;

const Price = styled.span`
  font-size: 0.8rem;
`;

function Coin(props) {
  const { symbol, price } = props;

  return (
    <StyledCoin>
      <Symbol>{symbol}</Symbol>
      <Price>{price}</Price>
    </StyledCoin>
  );
}

export default Coin;
