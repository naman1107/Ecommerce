import { render } from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Store from "./components/store/store";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
const rootElement = document.getElementById("root");
render(
  <Provider store={Store}>
    <Router>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Router>
  </Provider>,
  rootElement
);
