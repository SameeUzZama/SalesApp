import { createStore, combineReducers } from "redux";
import { productReducer } from "../Reducer/productReducer";

export const configStore = () => {
  const myStore = createStore(
    combineReducers({ productReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENTION()
  );
  return myStore;
};
