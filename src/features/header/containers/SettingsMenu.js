import React, { Component } from "react";
import { Manager, Popper, Reference } from "react-popper";
import { connect } from "react-redux";
import OutsideClickHandler from "react-outside-click-handler";
import styled from "styled-components";

import { logout } from "../../auth/actions/authActions";

const DropdownReference = styled.button`
  border-radius: 50%;
  height: 24px;
  width: 24px;
  border: 0;
  background-color: ${props => props.theme.brand};
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px;
`;

const MenuItem = styled.span`
  color: rgba(0, 0, 0, 0.8);
  font-size: 0.8rem;
  margin: 6px 0;
  cursor: pointer;
`;

class SettingsMenu extends Component {
  state = {
    openMenu: false
  };
  handleToggleMenu = () => {
    this.setState(prevState => ({
      openMenu: !prevState.openMenu
    }));
  };
  handleCloseMenu = () => {
    this.setState({ openMenu: false });
  };
  handleLogOut = () => {
    const { logout } = this.props;
    localStorage.removeItem("token");
    logout();
  };
  render() {
    const { openMenu } = this.state;
    return (
      <OutsideClickHandler onOutsideClick={this.handleCloseMenu}>
        <Manager>
          <Reference>
            {({ ref }) => (
              <DropdownReference ref={ref} onClick={this.handleToggleMenu}>
                T
              </DropdownReference>
            )}
          </Reference>
          {openMenu ? (
            <Popper placement="bottom-end">
              {({ ref, style, placement, arrowProps }) => (
                <div ref={ref} style={style} data-placement={placement}>
                  <DropdownMenu>
                    <MenuItem onClick={this.handleLogOut}>Log out</MenuItem>
                  </DropdownMenu>
                </div>
              )}
            </Popper>
          ) : null}
        </Manager>
      </OutsideClickHandler>
    );
  }
}

export default connect(
  null,
  {
    logout
  }
)(SettingsMenu);
