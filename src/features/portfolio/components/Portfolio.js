import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { getMarketQuotesLatest } from "../actions/portfolioActionCreators";
import Coin from "./Coin";

const Main = styled.main`
  min-height: 100vh;
  transition: background-color 0.2s ease;
  background-color: ${props => props.theme.backgroundPrimary};
  transition: ${props => props.theme.backgroundColorTransition};
`;

const Container = styled.div`
  max-width: 992px;
  margin: 0 auto;
  padding: 32px 24px;
`;

const Header = styled.header`
  padding: 20px;
  margin-bottom: 20px;
  background-color: #c33764;
  background: linear-gradient(to right, #1d2671, #c33764);
  color: ${props => props.theme.primary};
  border-radius: ${props => props.theme.borderRadius};
`;

const Watchlist = styled.div`
  color: ${props => props.theme.primary};
`;

const Portfolio = props => {
  const { getMarketQuotesLatest, marketQuotes } = props;

  useEffect(() => {
    getMarketQuotesLatest();
  }, []);

  return (
    <Main>
      <Container>
        <Header>New Portfolio</Header>
        <Watchlist>
          <Coin
            name={marketQuotes.BTC.name}
            symbol={marketQuotes.BTC.symbol}
            price={marketQuotes.BTC.quote.USD.price}
          />
          <Coin
            name={marketQuotes.ETH.name}
            symbol={marketQuotes.ETH.symbol}
            price={marketQuotes.ETH.quote.USD.price}
          />
        </Watchlist>
      </Container>
    </Main>
  );
};

const mapStateToProps = state => {
  return {
    marketQuotes: state.portfolio.marketQuotes
  };
};

export default connect(
  mapStateToProps,
  {
    getMarketQuotesLatest
  }
)(Portfolio);
