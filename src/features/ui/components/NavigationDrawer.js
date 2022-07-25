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
} from "@chakra-ui/react";

import ThemeForm from "../../settings/components/ThemeForm";
import { CLOSE_NAVIGATION_DRAWER } from "../actions/uiActionTypes";

function NavigationDrawer() {
  const dispatch = useDispatch();
  const navigationDrawer = useSelector((state) => state.ui.navigationDrawer);

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
          <ThemeForm />
          <Stack direction="column" spacing="2" mb="4">
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
