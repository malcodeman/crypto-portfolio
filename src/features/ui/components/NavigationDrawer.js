import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Button,
  Heading,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { FiMoon, FiSun } from "react-icons/fi";

import { CLOSE_NAVIGATION_DRAWER } from "../actions/uiActionTypes";

function NavigationDrawer() {
  const dispatch = useDispatch();
  const navigationDrawer = useSelector((state) => state.ui.navigationDrawer);
  const { colorMode, toggleColorMode } = useColorMode();

  function onClose() {
    dispatch({ type: CLOSE_NAVIGATION_DRAWER });
  }

  return (
    <Drawer isOpen={navigationDrawer} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>General</DrawerHeader>
        <DrawerBody>
          <Stack direction="column" spacing="2" mb="4">
            <Button
              size="sm"
              width="full"
              onClick={toggleColorMode}
              rightIcon={colorMode === "dark" ? <FiMoon /> : <FiSun />}
            >
              {colorMode === "dark" ? "Dark mode" : "Light mode"}
            </Button>
            <Link to="/settings">
              <Button size="sm" width="full">
                Settings
              </Button>
            </Link>
            <Link to="/notifications" variant="link">
              <Button size="sm" width="full">
                Notifications
              </Button>
            </Link>
            <Button size="sm">Contact support</Button>
          </Stack>
          <Heading fontSize="xl" mb="4">
            Sharing
          </Heading>
          <Button size="sm" width="full">
            Share screenshot
          </Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default NavigationDrawer;
