import { combineReducers } from "redux";
import dataReducer from "./dataGraphMeter";
import userReducer from "./user";
import dataMeterReducer from "./dataMeter";
import paymentReducer from "./payment";

const rootReducer = combineReducers({
  dataGraphic: dataReducer,
  userDataReducer: userReducer,
  dataMeterReducer: dataMeterReducer,
  paymentReducer: paymentReducer,
});

export default rootReducer;
