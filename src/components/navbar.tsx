import React from "react";
import {
  Box,
  Text,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Navbar = () => {
  const { totalQuantities } = useAppSelector((state) => state.CartReducer);
  return (
    <>
      <Box
        px={4}
        bg={useColorModeValue("gray.100", "gray.900")}
        top="0"
        position="sticky"
        zIndex="1"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Link to="/">
            <Button outline="none" box-Shadow="none" leftIcon={<AiFillHome />}>
              Home
            </Button>
          </Link>

          <Link to="/cart">
            <Button
              outline="none"
              boxShadow="none"
              rightIcon={<AiOutlineShoppingCart />}
            >
              My Cart
            </Button>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              position="absolute"
              right="21px"
              top="12px"
              width="20px"
              background="#383e47"
              borderRadius="100%"
              borderColor="#dfe4ed"
              color="white"
              fontSize="12px"
            >
              {totalQuantities}
            </Box>
          </Link>
        </Flex>
      </Box>
    </>
  );
};
export default Navbar;
