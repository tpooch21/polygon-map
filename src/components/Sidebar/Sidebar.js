import React, { useRef } from 'react';

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Icon,
  Text,
  Flex,

} from "@chakra-ui/core";

const Sidebar = props => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Flex>
      <Button
        ref={btnRef}
        m={2}
        onClick={onOpen}
        cursor="pointer"
        color="black"
        w={32}
        h={8}>
        <Icon
          name="arrow-right"
          mr={2}/>
        <Text fontSize="sm">Show Sidebar</Text>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent >
          <DrawerCloseButton
            w={6}
            h={6}
            cursor="pointer"/>
          <DrawerHeader size="m">View a Region of the Map</DrawerHeader>
          <DrawerBody>
            <Text>Click on the button below to show/hide the polygon displayed on the map</Text>
            <Button
              onClick={props.togglePolygon}
              cursor="pointer"
              variantColor="blue"
              w={32}
              h={8}
              fontSize="sm">Toggle Polygon</Button>
          </DrawerBody>
          <DrawerFooter>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Sidebar;