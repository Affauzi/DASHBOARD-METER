import { combineReducers } from "redux";
import dataReducer from "./dataGraphMeter";
import userReducer from "./user";
import dataMeterReducer from "./dataMeter";

const rootReducer = combineReducers({
  dataGraphic: dataReducer,
  userDataReducer: userReducer,
  dataMeterReducer: dataMeterReducer,
});

export default rootReducer;
