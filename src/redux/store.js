import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./reducers/products";

// creating the store 
// composeWithDevTools enables us to use redux-devtools in browser for debugging and other purposes 
// thunk enables async actions
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;