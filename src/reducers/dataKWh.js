import {
  AWAITING_RETRIEVE_DATA,
  SUCCESS_RETRIEVE_DATA,
  FAILED_RETRIEVE_DATA,
} from "../actions/types";

const initialState = {
  loading: false,
  data: {
    labels: [],
    datasets: [
      {
        label: "kWh Usage",
        backgroundColor: "rgb(228,102,81,0.9)",
        data: [],
      },
    ],
  },
};

function dataReducer(state = initialState, action) {
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
    case SUCCESS_RETRIEVE_DATA:
      return {
        ...state,
        loading: false,
        data: {
          labels: payload.tanggal,
          datasets: [
            {
              label: "kWh Usage",
              data: payload.data,
              backgroundColor: "rgb(228,102,81,0.9)",
            },
          ],
        },
      };
    default:
      return state;
  }
}

export default dataReducer;
