import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Center, Spinner } from "@chakra-ui/react";
import styled from "styled-components";
import Modal from "../../commonComponents/Modal";

import { GET_MAP_REQUEST, WATCH_COIN } from "../actions/portfoliosActionTypes";

const Body = styled.div`
  min-width: 100vw;
  height: 100vh;
  padding: 1em;
  overflow-y: auto;
  transition: min-width 0.3s cubic-bezier(0.84, 0.02, 0.37, 0.74),
    height 0.3s cubic-bezier(0.84, 0.02, 0.37, 0.74);
  @media (min-width: 768px) {
    min-width: 50vw;
    height: 50vh;
  }
  border-radius: ${(props) => props.theme.borderRadius};
  animation: ${(props) => props.theme.bounceInAnimation};
  background-color: ${(props) => props.theme.backgroundPrimary};
`;

const Search = styled.input`
  border: 0;
  font-size: 0.8rem;
  padding: 10px;
  margin-bottom: 16px;
  width: 100%;
  color: ${(props) => props.theme.primary};
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.backgroundSecondary};
`;

const Title = styled.h2`
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 10px 0;
  font-weight: normal;
  color: ${(props) => props.theme.primary}7F;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
`;

const Coin = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  padding: 10px 0;
  :not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
  }
`;

const Index = styled.span`
  margin-right: 10px;
  display: none;
  @media (min-width: 768px) {
    display: inline;
  }
  color: ${(props) => props.theme.primary};
`;

const Name = styled.span`
  margin-right: 10px;
  color: ${(props) => props.theme.primary};
`;

const Symbol = styled.span`
  margin-right: 10px;
  color: ${(props) => props.theme.primary}7F;
`;

const WatchCoinButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 0;
  padding: 0 1em;
  margin-left: auto;
  border-radius: 40px;
  min-height: 40px;
  min-width: 64px;
  color: #fff;
  @media (min-width: 768px) {
    min-width: 128px;
  }
  background: ${(props) => props.theme.ibizaSunset};
`;

function WatchCoinModal(props) {
  const dispatch = useDispatch();
  const map = useSelector((state) => state.portfolios.map);
  const fetchingMap = useSelector((state) => state.portfolios.fetchingMap);
  const portfolioId = useSelector((state) => state.portfolios.portfolioId);

  useEffect(() => {
    dispatch({ type: GET_MAP_REQUEST });
  }, [dispatch]);

  return (
    <Modal dismiss={props.dismiss}>
      <Body>
        <Search autoFocus type="text" placeholder="Search over 2.000 coins" />
        <Title>All coins</Title>
        {map.length === 0 && fetchingMap && (
          <Center marginY="2">
            <Spinner />
          </Center>
        )}
        {map.map((coin, index) => (
          <Coin key={coin.id}>
            <Index>{index + 1}</Index>
            <Name>{coin.name}</Name>
            <Symbol>{coin.symbol}</Symbol>
            <WatchCoinButton
              onClick={() =>
                dispatch({ type: WATCH_COIN, payload: { portfolioId, coin } })
              }
            >
              Watch
            </WatchCoinButton>
          </Coin>
        ))}
      </Body>
    </Modal>
  );
}

export default WatchCoinModal;
