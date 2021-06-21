import {
  AWAITING_RETRIEVE_DATA,
  SUCCESS_RETRIEVE_DATA_KWH,
  SUCCESS_RETRIEVE_DATA_VOLTAGE,
  SUCCESS_RETRIEVE_DATA_CURRENT,
  FAILED_RETRIEVE_DATA,
} from "../actions/types";

const initialState = {
  loading: false,
  dataKwh: {
    labels: [],
    datasets: [
      {
        label: "kWh Usage",
        backgroundColor: "rgb(228,102,81,0.9)",
        data: [],
      },
    ],
  },
  dataVoltage: {
    labels: [],
    datasets: [
      {
        label: "Voltage",
        backgroundColor: "rgb(228,102,81,0.9)",
        data: [],
      },
    ],
  },
  dataCurrent: {
    labels: [],
    datasets: [
      {
        label: "Current",
        backgroundColor: "rgb(228,102,81,0.9)",
        data: [],
      },
    ],
  },
};

const dataReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case AWAITING_RETRIEVE_DATA:
      return {
        ...state,
        loading: true,
      };
    case FAILED_RETRIEVE_DATA:
      return {
        ...state,
        loading: false,
      };
    case SUCCESS_RETRIEVE_DATA_KWH:
      return {
        ...state,
        loading: false,
        dataKwh: {
          labels: payload.tanggal,
          datasets: [
            {
              label: "kWh Usage",
              data: payload.kwh,
              backgroundColor: "rgb(228,102,81,0.9)",
            },
          ],
        },
      };
    case SUCCESS_RETRIEVE_DATA_VOLTAGE:
      return {
        ...state,
        loading: false,
        dataVoltage: {
          labels: payload.tanggal,
          datasets: [
            {
              label: "Voltage",
              data: payload.dataVoltage,
              backgroundColor: "rgb(228,102,81,0.9)",
            },
          ],
        },
      };
    case SUCCESS_RETRIEVE_DATA_CURRENT:
      return {
        ...state,
        loading: false,
        dataCurrent: {
          labels: payload.tanggal,
          datasets: [
            {
              label: "Current",
              data: payload.dataCurrent,
              backgroundColor: "rgb(228,102,81,0.9)",
            },
          ],
        },
      };
    default:
      return state;
  }
  return state;
};

export default dataReducer;
