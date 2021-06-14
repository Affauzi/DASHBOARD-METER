import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {
  sidebarShow: "responsive",
};

const middleware = [thunk];

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case "set":
      return { ...state, ...rest };
    default:
      return state;
  }
};

// const store = createStore(
//   () => [],
//   { changeState, initialState },
//   applyMiddleware()
// );

const store = createStore(
  changeState,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
