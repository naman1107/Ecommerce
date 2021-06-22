import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import {
  Box,
  Flex,
  Image,
  SimpleGrid,
  Text,
  Stack,
  HStack,
  Button,
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Wrap,
  Center,
  WrapItem,
  Heading
} from "@chakra-ui/react";
import { HiMinus, HiPlus, HiOutlineX } from "react-icons/hi";
import { AiFillDelete } from "react-icons/ai";
const Cart = () => {
  const { products, totalPrice, totalQuantities } = useAppSelector(
    (state) => state.CartReducer
  );

  const dispatch = useAppDispatch();
  const increment = () => {
    dispatch({ type: "INC", payload: products.id });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Flex
        width="100%"
        marginRight={["0px", "0px", "0px", "600px"]}
        padding="0px"
        flexWrap="wrap"
        marginTop={["0px", "0px", "0px", "40px"]}
        justifyContent={["", "column", "column", "left"]}
      >
        <Box
          marginLeft={["0px", "0px", "0px", "40px"]}
          margin="10px"
          maxWidth={["95%", "600px"]}
          padding="8px"
          borderRadius="7px"
          flex="3"
        >
          <Flex justifyContent={["center", "center", "center", "left"]}>
            <Text fontWeight="bold" marginTop="20px" fontSize="28px">
              Your Cart
            </Text>
          </Flex>
          {products.length == 0 ? (
            <>
              <Flex justifyContent={["center", "center", "center", "left"]}>
                <Text marginTop="10px"> Your Cart is empty</Text>
              </Flex>
            </>
          ) : (
            <>
              {products.map((product: { id: any; img: string | undefined; title: React.ReactNode; quantity: any; price: number; }) => (
                <>
                  <Box
                    padding="0px"
                    transition="124ms ease-in-out"
                    border="rgba(0, 0, 0, 0.2) solid 1px"
                    borderRadius="7px"
                    maxWidth={["100%", "600px"]}
                    _hover={{ boxShadow: "rgba(4, 30, 66, 0.5) 0 0 4px" }}
                    marginTop="10px"
                    marginBottom="20px"
                  >
                    <Flex
                      marginRight="5px"
                      alignItems="center"
                      justifyContent="flex-end"
                      height="30px"
                      cursor="pointer"
                      onClick={() => (
                        dispatch({ type: "REM", payload: product.id }),
                        dispatch({
                          type: "UPDATE_REMOVE",
                          payload: product.id
                        })
                      )}
                    >
                      <HiOutlineX size="25" />
                    </Flex>
                    <Link to={`/details/${product.id}`}>
                      <Image
                        fit="contain"
                        width="100px"
                        height="100px"
                        marginTop={["10px", "10px", "10px", "0px"]}
                        src={product.img}
                      />
                    </Link>

                    <Flex marginBottom="15px">
                      <Flex
                        width="400px"
                        flexWrap="wrap"
                        flexDirection={["column", "column", "column", "column"]}
                        padding="0"
                        marginLeft="100px"
                        marginTop="-100px"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Text fontWeight="bold" marginBottom="10px">
                          {product.title}
                        </Text>
                        <Flex marginBottom="10px">
                          <Flex
                            marginLeft="5px"
                            marginRight="5px"
                            border="1px"
                            width="40px"
                            height="40px"
                            justifyContent="center"
                            _hover={{
                              backgroundColor: "#e8e8e8"
                            }}
                            justifyItems="center"
                            alignItems="center"
                            cursor="pointer"
                            borderRadius="5%"
                            onClick={() => (
                              dispatch({ type: "DEC", payload: product.id }),
                              dispatch({
                                type: "UPDATE_DEC",
                                payload: product.id
                              })
                            )}
                          >
                            <HiMinus size="15" />
                          </Flex>
                          <Text>
                            <Text fontWeight="600" margin="10px">
                              {product.quantity}
                            </Text>
                          </Text>
                          <Flex
                            marginLeft="5px"
                            marginRight="5px"
                            border="1px"
                            width="40px"
                            height="40px"
                            justifyContent="center"
                            _hover={{
                              backgroundColor: "#e8e8e8"
                            }}
                            justifyItems="center"
                            alignItems="center"
                            cursor="pointer"
                            borderRadius="5%"
                            onClick={() => (
                              dispatch({ type: "INC", payload: product.id }),
                              dispatch({
                                type: "UPDATE_INC",
                                payload: product.id
                              })
                            )}
                          >
                            <HiPlus size="15" />
                          </Flex>
                        </Flex>
                        <Text fontWeight="700">
                          {"\u20B9"} {product.price * product.quantity}
                        </Text>
                      </Flex>
                    </Flex>
                  </Box>
                </>
              ))}
            </>
          )}
        </Box>

        <Box
          marginLeft={["20px", "20px", "20px", "60px"]}
          marginTop={["0px", "0px", "0px", "90px"]}
          marginBottom={["20px", "20px", "20px", "0px"]}
        >
          <Box>
            <Text fontWeight="800">Cart Summary</Text>
          </Box>
          <Text fontWeight="600">Total Products:{totalQuantities}</Text>
          <Text fontweight="600">
            {" "}
            Amount to be paid: {"\u20B9"} {totalPrice}
          </Text>
        </Box>
      </Flex>
    </>
  );
};
export default Cart;
