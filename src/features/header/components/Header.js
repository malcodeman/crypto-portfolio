import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { FiMoreVertical } from "react-icons/fi";
import {
  Box,
  Container,
  Flex,
  IconButton,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { OPEN_NAVIGATION_DRAWER } from "../../ui/actions/uiActionTypes";

function Header() {
  const dispatch = useDispatch();
  const boxShadow = useColorModeValue(
    "rgba(0, 0, 0, 0.03) 0px 2px 0px 0px",
    "rgba(255, 255, 255, 0.03) 0px 2px 0px 0px"
  );
  return (
    <Box
      boxShadow={boxShadow}
      position="fixed"
      top="0"
      right="0"
      left="0"
      zIndex="1"
    >
      <Container maxW="container.lg">
        <Flex paddingY="2" justifyContent="space-between" alignItems="center">
          <Flex>
            <NavLink exact to="/">
              <Text mr="2">Home</Text>
            </NavLink>
            <NavLink to="/signals">
              <Text mr="2">Signals</Text>
            </NavLink>
            <NavLink to="/markets">
              <Text mr="2">Markets</Text>
            </NavLink>
            <NavLink to="/news">
              <Text mr="2">News</Text>
            </NavLink>
          </Flex>
          <IconButton
            size="sm"
            onClick={() => dispatch({ type: OPEN_NAVIGATION_DRAWER })}
          >
            <FiMoreVertical />
          </IconButton>
        </Flex>
      </Container>
    </Box>
  );
}

export default Header;
