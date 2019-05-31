import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Modal from "../../commonComponents/Modal";

import Spin from "../../ui/components/Spin";
import { getMap } from "../actions/portfoliosActionCreators";

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
`;

const Search = styled.input`
  border: 0;
  font-size: 0.8rem;
  padding: 10px;
  margin-bottom: 16px;
  width: 100%;
  color: ${props => props.theme.primary};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.backgroundSecondary};
`;

const Title = styled.h2`
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 10px 0;
  font-weight: normal;
  color: ${props => props.theme.primary}7F;
  border-bottom: 1px solid ${props => props.theme.borderColor};
`;

const SpinWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 1em 0;
`;

const Coin = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  padding: 10px 0;
  :not(:last-child) {
    border-bottom: 1px solid ${props => props.theme.borderColor};
  }
`;

const Index = styled.span`
  margin-right: 10px;
  display: none;
  @media (min-width: 768px) {
    display: inline;
  }
  color: ${props => props.theme.primary};
`;

const Name = styled.span`
  margin-right: 10px;
  color: ${props => props.theme.primary};
`;

const Symbol = styled.span`
  margin-right: 10px;
  color: ${props => props.theme.primary}7F;
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
  background: ${props => props.theme.ibizaSunset};
`;

function WatchCoinModal(props) {
  const { fetchingMap, map } = props;

  useEffect(() => {
    const { getMap } = props;

    getMap();
  }, []);

  return (
    <Modal dismiss={props.dismiss}>
      <Body>
        <Search type="text" placeholder="Search over 2.000 coins" />
        <Title>All coins</Title>
        {map.length === 0 &&
          fetchingMap && (
            <SpinWrapper>
              <Spin />
            </SpinWrapper>
          )}
        {map.map((coin, index) => (
          <Coin>
            <Index>{index + 1}</Index>
            <Name>{coin.name}</Name>
            <Symbol>{coin.symbol}</Symbol>
            <WatchCoinButton>Watch</WatchCoinButton>
          </Coin>
        ))}
      </Body>
    </Modal>
  );
}

const mapStateToProps = state => {
  return {
    map: state.portfolios.map,
    fetchingMap: state.portfolios.fetchingMap
  };
};

export default connect(
  mapStateToProps,
  {
    getMap
  }
)(WatchCoinModal);
