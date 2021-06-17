import { combineReducers } from "redux";
import dataReducer from "./dataKWh";
import userReducer from "./user";

const rootReducer = combineReducers({
  dataGraphic: dataReducer,
  userDataReducer: userReducer,
});

export default rootReducer;
