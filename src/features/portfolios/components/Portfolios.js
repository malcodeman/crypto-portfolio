import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import PortfoliosList from "./PortfoliosList";
import WatchCoinModal from "./WatchCoinModal";
import Coin from "./Coin";
import Plus from "../styles/icons/Plus";
import {
  GET_MARKET_QUOTES_LATEST_REQUEST,
  SET_PORTFOLIO_ID,
} from "../actions/portfoliosActionTypes";

const Wrapper = styled.div`
  min-height: 100vh;
  transition: background-color 0.2s ease;
  background-color: ${(props) => props.theme.backgroundPrimary};
  transition: ${(props) => props.theme.backgroundColorTransition};
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
  color: ${(props) => props.theme.primary};
  border-radius: ${(props) => props.theme.borderRadius};
`;

const Watchlist = styled.div`
  color: ${(props) => props.theme.primary};
`;

const Portfolio = styled.div`
  margin-bottom: 20px;
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

const AddCoinButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AddCoinButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 0;
  padding: 10px;
  height: 100%;
  width: 100%;
  color: ${(props) => props.theme.primary};
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.backgroundSecondary};
`;

const AddCoinButtonText = styled.span`
  font-size: 0.8rem;
  margin-top: 10px;
`;

function Portfolios() {
  const [watchCoinModal, setWatchCoinModal] = useState(false);
  const portfolios = useSelector((state) => state.portfolios.portfolios);
  const symbols = useSelector((state) => state.portfolios.portfolios);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_MARKET_QUOTES_LATEST_REQUEST, payload: symbols });
  }, [symbols, dispatch]);

  function handleOnClick(id) {
    dispatch({ type: SET_PORTFOLIO_ID, payload: id });
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
          {portfolios.map((portfolio) => {
            return (
              <Portfolio key={portfolio.id}>
                <Header>{portfolio.name}</Header>
                <Grid>
                  {portfolio.coins.map((coin) => (
                    <Coin
                      key={coin.id}
                      name={coin.name}
                      symbol={coin.symbol}
                      price={coin.price}
                      percentChange24h={coin.percentChange24h}
                    />
                  ))}
                  <AddCoinButtonWrapper>
                    <AddCoinButton onClick={() => handleOnClick(portfolio.id)}>
                      <Plus height={16} width={16} />
                    </AddCoinButton>
                    <AddCoinButtonText>Add a coin</AddCoinButtonText>
                  </AddCoinButtonWrapper>
                </Grid>
              </Portfolio>
            );
          })}
          <WatchCoinModal
            isOpen={watchCoinModal}
            onClose={() => setWatchCoinModal(false)}
          />
        </Watchlist>
      </Container>
    </Wrapper>
  );
}

export default Portfolios;
