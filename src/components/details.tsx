import React, { useEffect, useState } from "react";
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
  useColorModeValue,
  ModalBody,
  ModalCloseButton,
  Wrap,
  Center,
  WrapItem,
  Heading
} from "@chakra-ui/react";
import { useParams, Link } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { HiMinus, HiPlus } from "react-icons/hi";
const Details = () => {
  const dispatch = useAppDispatch();

  const { id }: any = useParams();

  const { products }: any = useAppSelector((state) => state.ProductReducer);
  let selected = products.find((product: { id: number; }) => product.id === parseInt(id));

  const [quant, setQuant]: [number, any] = useState(selected.quantity);
  const decQuant = (): void => {
    if (quant > 1) {
      setQuant(quant - 1);
    }
  };

  const add = (): void => {
    dispatch({ type: "ADD_TO_CART", payload: { selected, quant } });
    dispatch({ type: "UPDATE_PRODUCER", payload: { selected, quant } });
  };
  const addCart = (): void => {
    add();
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Box overflowX="hidden">
        <Container
          marginTop={["60px", "60px", "60px", "150px"]}
          padding="0px"
          marginBottom="20px"
          centerContent
        >
          <Flex
            alignItems="center"
            justifyContent="center"
            alignContent="center"
            padding="0px"
            flexWrap="wrap"
            justifyItems="center"
          >
            <Container
              marginLeft={["0px", "0px", "0px", "-300px"]}
              padding="0px"
              centerContent
            >
              <Image
                src={selected.img}
                fit="contain"
                height="400px"
                width="200px"
              />
            </Container>

            <Container
              marginTop={["10px", "10px", "10px", "-580px"]}
              marginLeft={["0px", "0px", "0px", "120px"]}
              adding="0px"
              centerContent
            >
              <Text
                flexWrap="wrap"
                fontSize="28px"
                color="#2c2c2c"
                fontWeight="bold"
                textTransform="capitalize"
              >
                {selected.title}
              </Text>

              <Text fontSize="22px" color="#302d30" fontWeight="600">
                {selected.company}
              </Text>
              <Text fontsize="20px" color="#302e30" fontWeight="500px">
                Price: {"\u20B9"}
                {selected.price}
              </Text>
              <Text fontSize="12px" textAlign="justify">
                {selected.info}
              </Text>
            </Container>
            <Container
              adding="0px"
              centerContent
              marginTop={["10px", "10px", "10px", "-250px"]}
              marginLeft={["0px", "0px", "0px", "120px"]}
            >
              <Flex marginTop="10px">
                <Flex
                 
                  border="1px"
                  width={["110px", "110px", "110px", "150px"]}
                  height="40px"
                 
                  _hover={{
                    backgroundColor: "#e8e8e8"
                  }}
                  justifyItems="center"
                  alignItems="center"
                  onClick={decQuant}
                  marginLeft="5px"
                  marginRight="5px"
                  justifyContent="center"
               
                  cursor="pointer"
                  borderRadius="5%"
                >
                  <HiMinus size="20" />
                </Flex>
                <Flex>
                  <Text>
                    <Text margin="10px">{quant}</Text>
                  </Text>
                </Flex>
                <Flex
                  marginLeft="5px"
                  marginRight="5px"
                  border="1px"
                  width={["110px", "110px", "110px", "150px"]}
                  height="40px"
                  justifyContent="center"
                  _hover={{
                    backgroundColor: "#e8e8e8"
                  }}
                  justifyItems="center"
                  alignItems="center"
                  onClick={() => setQuant(quant + 1)}
                  cursor="pointer"
                  borderRadius="5%"
                >
                  <HiPlus size="20" />
                </Flex>
              </Flex>
              <Flex marginTop="15px">
                <Link to="/">
                  <Button
                    marginRight="30px"
                    borderRadius="0%"
                    width={["150px", "180px", "180px", "200px"]}
                  >
                    Go home
                  </Button>
                </Link>
                <Button
                  width={["150px", "180px", "180px", "200px"]}
                  onClick={addCart}
                  borderRadius="0%"
                >
                  Add To Cart
                </Button>
              </Flex>
            </Container>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Details;
