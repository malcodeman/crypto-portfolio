import React, { Component } from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import Header from "../../header/containers/Header";
import NotFound from "../../404/components/NotFound";
import privateRoutes from "../../../core/routes/privateRoutes";

const StyledMain = styled.main`
  color: #fff;
  display: flex;
  flex-direction: column;
`;

const ViewWrapper = styled.div`
  padding: 10px;
  color: #151b26;
  height: 100%;
  overflow-y: auto;
`;

class Main extends Component {
  renderRoutes = routes => {
    return (
      <Switch>
        {routes.map(route => {
          return (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          );
        })}
        <Route component={NotFound} />
      </Switch>
    );
  };
  render() {
    return (
      <StyledMain>
        <Header />
        <ViewWrapper>{this.renderRoutes(privateRoutes)}</ViewWrapper>
      </StyledMain>
    );
  }
}

export default Main;
