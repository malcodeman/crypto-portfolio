import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { getMarketQuotesLatest } from "../actions/portfolioActionCreators";
import { ReactComponent as BtcIcon } from "../assets/icons/btc.svg";
import { ReactComponent as EthIcon } from "../assets/icons/eth.svg";
import { ReactComponent as LtcIcon } from "../assets/icons/ltc.svg";

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
  color: #fff;
  border-radius: ${props => props.theme.borderRadius};
`;

const Watchlist = styled.div`
  color: ${props => props.theme.primary};
`;

const HeaderCell = styled.div`
  text-transform: uppercase;
  font-size: 0.6rem;
  @media (min-width: 576px) {
    font-size: 0.8rem;
  }
  color: ${props => props.theme.secondary};
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 10px 0;
  ${HeaderCell}:not(:first-child) {
    text-align: right;
  }
  border-bottom: 1px solid ${props => props.theme.borderColor};
`;

const BitcoinIcon = styled(BtcIcon)`
  margin-right: 10px;
`;

const EthereumIcon = styled(EthIcon)`
  margin-right: 10px;
`;

const LitecoinIcon = styled(LtcIcon)`
  margin-right: 10px;
`;

const StandarCell = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  @media (min-width: 576px) {
    font-size: 1rem;
  }
`;

const Price = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const PercentChange = styled.span`
  color: ${props =>
    props.bullish ? props.theme.bullish : props.theme.bearish};
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 10px 0;
  ${StandarCell}:not(:first-child) {
    justify-content: flex-end;
  }
  border-bottom: 1px solid ${props => props.theme.borderColor};
`;

const AddButton = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 6px 16px;
  font-size: 0.8rem;
  @media (min-width: 576px) {
    font-size: 1rem;
  }
  color: ${props => props.theme.primary};
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid ${props => props.theme.borderColor};
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
          <TableHeader>
            <HeaderCell>Coin</HeaderCell>
            <HeaderCell>Price</HeaderCell>
            <HeaderCell>Holdings</HeaderCell>
          </TableHeader>
          <Row>
            <StandarCell>
              <BitcoinIcon />
              {marketQuotes.BTC.symbol}
            </StandarCell>
            <StandarCell>
              <Price>
                <span />${marketQuotes.BTC.quote.USD.price}
                <PercentChange
                  bullish={marketQuotes.BTC.quote.USD.percent_change_24h > 0}
                >
                  {marketQuotes.BTC.quote.USD.percent_change_24h}
                </PercentChange>
              </Price>
            </StandarCell>
            <StandarCell>
              <AddButton>Add</AddButton>
            </StandarCell>
          </Row>
          <Row>
            <StandarCell>
              <EthereumIcon />
              {marketQuotes.ETH.symbol}
            </StandarCell>
            <StandarCell>
              <Price>
                <span />${marketQuotes.ETH.quote.USD.price}
                <PercentChange
                  bullish={marketQuotes.ETH.quote.USD.percent_change_24h > 0}
                >
                  {marketQuotes.ETH.quote.USD.percent_change_24h}
                </PercentChange>
              </Price>
            </StandarCell>
            <StandarCell>
              <AddButton>Add</AddButton>
            </StandarCell>
          </Row>
          <Row>
            <StandarCell>
              <LitecoinIcon />
              {marketQuotes.LTC.symbol}
            </StandarCell>
            <StandarCell>
              <Price>
                <span />${marketQuotes.LTC.quote.USD.price}
                <PercentChange
                  bullish={marketQuotes.LTC.quote.USD.percent_change_24h > 0}
                >
                  {marketQuotes.LTC.quote.USD.percent_change_24h}
                </PercentChange>
              </Price>
            </StandarCell>
            <StandarCell>
              <AddButton>Add</AddButton>
            </StandarCell>
          </Row>
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
