import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import PortfoliosList from "./PortfoliosList";
import WatchCoinModal from "./WatchCoinModal";
import Plus from "../styles/icons/Plus";
import {
  getMarketQuotesLatest,
  setPortfolioId
} from "../actions/portfoliosActionCreators";

const Wrapper = styled.div`
  min-height: 100vh;
  transition: background-color 0.2s ease;
  background-color: ${props => props.theme.backgroundPrimary};
  transition: ${props => props.theme.backgroundColorTransition};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 64px 20px;
  width: 100%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 20px;
  }
`;

const Header = styled.header`
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 20px;
  color: ${props => props.theme.primary};
  border-radius: ${props => props.theme.borderRadius};
`;

const Watchlist = styled.div`
  color: ${props => props.theme.primary};
`;

const Portfolio = styled.div`
  margin-bottom: 20px;
`;

const PercentChange = styled.span`
  color: ${props =>
    props.bullish ? props.theme.bullish : props.theme.bearish};
`;

const SidebarContainer = styled.div`
  display: none;
  @media (min-width: 992px) {
    display: flex;
    flex-direction: column;
  }
`;

const Sidebar = styled.div`
  position: sticky;
  top: 64px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
  grid-gap: 20px;
`;

const AddCoinButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 0;
  padding: 10px;
  height: 64px;
  width: 64px;
  color: ${props => props.theme.primary};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.backgroundSecondary};
`;

const Coin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  color: ${props => props.theme.primary};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.backgroundSecondary};
`;

function Portfolios(props) {
  const { getMarketQuotesLatest, setPortfolioId, portfolios, symbols } = props;
  const [watchCoinModal, setWatchCoinModal] = useState(false);

  useEffect(
    () => {
      getMarketQuotesLatest(symbols);
    },
    [symbols]
  );

  function handleOnClick(id) {
    setPortfolioId(id);
    setWatchCoinModal(true);
  }

  return (
    <Wrapper>
      <Container>
        <SidebarContainer>
          <Sidebar>
            <PortfoliosList />
          </Sidebar>
        </SidebarContainer>
        <Watchlist>
          {portfolios.map(portfolio => {
            return (
              <Portfolio key={portfolio.id}>
                <Header>{portfolio.name}</Header>
                <Grid>
                  {portfolio.coins.map(coin => (
                    <Coin key={coin.id}>
                      {coin.symbol} - {coin.price} -
                      <PercentChange bullish={coin.percentChange24h > 0}>
                        {coin.percentChange24h}
                      </PercentChange>
                    </Coin>
                  ))}
                  <AddCoinButton onClick={() => handleOnClick(portfolio.id)}>
                    <Plus height={16} width={16} />
                  </AddCoinButton>
                </Grid>
              </Portfolio>
            );
          })}
          {watchCoinModal && (
            <WatchCoinModal dismiss={() => setWatchCoinModal(false)} />
          )}
        </Watchlist>
      </Container>
    </Wrapper>
  );
}

const mapStateToProps = state => {
  return {
    portfolios: state.portfolios.portfolios,
    symbols: state.portfolios.symbols
  };
};

export default connect(
  mapStateToProps,
  {
    getMarketQuotesLatest,
    setPortfolioId
  }
)(Portfolios);
