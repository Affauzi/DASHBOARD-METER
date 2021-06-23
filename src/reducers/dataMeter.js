import {
  AWAITING_DATA,
  SUCCESS_DATA_KWH,
  SUCCESS_DATA_VOLTAGE,
  SUCCESS_DATA_CURRENT,
  FAILED_DATA,
} from "../actions/types";

const initialState = {
  loading: false,
  dataKwh: "",
  dataVoltage: "",
  dataCurrent: "",
  //   no_meter: ""
};

const dataMeterReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case AWAITING_DATA:
      return {
        ...state,
        loading: true,
      };
    case FAILED_DATA:
      return {
        ...state,
        loading: false,
      };
    case SUCCESS_DATA_KWH:
      return {
        ...state,
        loading: false,
        dataKwh: payload.dataKwh,
      };
    case SUCCESS_DATA_VOLTAGE:
      return {
        ...state,
        loading: false,
        dataVoltage: payload.dataVoltage,
      };
    case SUCCESS_DATA_CURRENT:
      return {
        ...state,
        loading: false,
        dataCurrent: payload.dataCurrent,
      };
    default:
      return state;
  }
  return state;
};

export default dataMeterReducer;
