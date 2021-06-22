import React, { Component } from "react";
import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  Checkbox,
  CheckboxGroup,
  useColorModeValue,
  Button
} from "@chakra-ui/react";

type filterf = {
 
  layout: any;
};

const Filter = (props: filterf) => {
  return (
    <>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        marginLeft="15px"
        marginRight="15px"
        overflowX="hidden"
      >
        <Menu closeOnSelect={false}>
          <MenuButton as={Button} colorScheme="blue">
            Select Layout
          </MenuButton>
          <MenuList minWidth="240px">
            <MenuOptionGroup
              defaultValue="four"
              fontWeight="bold"
              title="Grid(works on full screen)"
              textOverflow="clip"
              onChange={props.layout}
              type="radio"
            >
              <MenuItemOption value="four">Four</MenuItemOption>
              <MenuItemOption value="three">Three</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </Flex>
    </>
  );
};
export default Filter;
