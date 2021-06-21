import { combineReducers } from "redux";
import dataReducer from "./dataMeter";
import userReducer from "./user";

const rootReducer = combineReducers({
  dataGraphic: dataReducer,
  userDataReducer: userReducer,
});

export default rootReducer;
