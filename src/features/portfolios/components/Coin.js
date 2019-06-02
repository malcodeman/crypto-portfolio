import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledCoin = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  color: ${props => props.theme.primary};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.backgroundSecondary};
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Symbol = styled.span`
  text-transform: uppercase;
  font-size: 0.8rem;
  margin-right: 20px;
`;

const TimePeriod = styled.span`
  font-size: 0.8rem;
  text-transform: uppercase;
  color: ${props => props.theme.secondary};
`;

const Main = styled.main`
  display: flex;
  justify-content: space-between;
`;

const PriceWrapper = styled.div`
  font-size: 0.8rem;
`;

const FiatCurrency = styled.span``;

const Price = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
`;

const PercentChange = styled.span`
  font-size: 0.8rem;
  color: ${props =>
    props.bullish ? props.theme.bullish : props.theme.bearish};
`;

const Name = styled.span`
  font-size: 0.8rem;
  margin-top: 10px;
`;

function Coin(props) {
  const { symbol, price, name, percentChange24h } = props;
  const bullish = percentChange24h > 0;

  return (
    <Wrapper>
      <StyledCoin>
        <Header>
          <Symbol>{symbol}</Symbol>
          <TimePeriod>24h</TimePeriod>
        </Header>
        <Main>
          <PriceWrapper>
            <FiatCurrency>USD</FiatCurrency> <Price>{price}</Price>
          </PriceWrapper>
          <PercentChange bullish={bullish}>
            {bullish && "+"}
            {percentChange24h}%
          </PercentChange>
        </Main>
      </StyledCoin>
      <Name>{name}</Name>
    </Wrapper>
  );
}

export default Coin;
