import { combineReducers } from "redux";
import dataReducer from "./dataKWh";

const rootReducer = combineReducers({
  dataGraphic: dataReducer,
});

export default rootReducer;
