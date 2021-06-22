import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import useWindowDimensions from "./windowhook/windowhook";
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
  Fade,
  ScaleFade,
  Slide,
  SlideFade
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import Filter from "./filter";

const Home = () => {
  const { height, width } = useWindowDimensions();
  const [wid, setWidth]: [number, any] = useState(300);
  const [number, setQuant]: [number, any] = useState(1);

  const dispatch = useAppDispatch();
  let { products } = useAppSelector((state) => state.ProductReducer);

  const setlayout = (num: string) => {
    if (num == "three") {
      setWidth(350);
      console.log(wid);
    } else {
      setWidth(300);
      console.log(wid);
    }
  };
  return (
    <>
      <Filter layout={setlayout} />

      <Flex
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        direction={{ base: "column", md: "row" }}
      >
        {products.map((products: { id: any; img: string | undefined; title: React.ReactNode; price: React.ReactNode; company: React.ReactNode; inCart: boolean; }) => (
          <Box
            shadow="md"
            borderWidth="1px"
            width={wid}
            _hover={{
              borderboxShadow: "dark-lg",

              rounded: "md"
            }}
            borderboxShadow="md"
            margin="15px"
          >
            <Box marginTop="50px">
              <Container h="450px" centerContent>
                <Container centerContent>
                  <Link to={`/details/${products.id}`}>
                    <Container centerContent>
                      <Image
                        fit="contain"
                        src={products.img}
                        objectFit="cover"
                      />

                      <Text
                        fontWeight="800"
                        marginBottom="2px"
                        marginTop="30px"
                      >
                        {" "}
                        {products.title}
                      </Text>
                      <Text fontWeight="700">
                        {" "}
                        Price: {"\u20B9"}
                        {products.price}
                      </Text>
                      <Text marginTop="1px" fontWeight="600">
                        {" "}
                        Company:{products.company}
                      </Text>
                    </Container>
                  </Link>
                  {products.inCart == false ? (
                    <Button
                      onClick={() => (
                        dispatch({
                          type: "ADD_FROM_HOME",
                          payload: { products, number }
                        }),
                        dispatch({
                          type: "UPDATE_HOME",
                          payload: products.id
                        })
                      )}
                      borderRadius="0%"
                      marginTop="15px"
                      width="200px"
                    >
                      <Text>Add To Cart</Text>{" "}
                    </Button>
                  ) : (
                    <Link to="/cart">
                      <Button borderRadius="0%" marginTop="15px" width="200px">
                        <Text>Go To Cart</Text>
                      </Button>{" "}
                    </Link>
                  )}
                </Container>
              </Container>
            </Box>
          </Box>
        ))}
      </Flex>
    </>
  );
};
export default Home;
