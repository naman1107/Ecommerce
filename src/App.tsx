import "./styles.css";
import { Component } from "react";
import Navbar from "./components/navbar";
import { Route, Switch } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import Home from "./components/home";
import Cart from "./components/cart";
import Details from "./components/details";
export default class App extends Component<{}> {
  render() {
    return (
      <>
        <Navbar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/details/:id" component={Details} />
        </Switch>
      </>
    );
  }
}
