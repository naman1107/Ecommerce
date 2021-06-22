import { configureStore } from "@reduxjs/toolkit";
import { ProductReducer } from "./reducers/productreducer";
import { CartReducer } from "./reducers/cartreducer";
import { devToolsEnhancer } from "redux-devtools-extension";
import { applyMiddleware } from "redux";

const store = configureStore({
  reducer: {
    ProductReducer: ProductReducer,
    CartReducer: CartReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
