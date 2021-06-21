import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

// const initialState = {};

// const middleware = [thunk];

// const changeState = (state = initialState, { type, ...rest }) => {
//   switch (type) {
//     case "set":
//       return { ...state, ...rest };
//     default:
//       return state;
//   }
// };

const store = createStore(
  rootReducer,
  //changeState,
  // initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
