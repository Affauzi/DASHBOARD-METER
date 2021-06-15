import {
  AWAITING_RETRIEVE_DATA,
  SUCCESS_RETRIEVE_DATA,
  FAILED_RETRIEVE_DATA,
} from "./types";

import DataService from "../services/servicesDataMeter";

export const retrieveData =
  ({ time, number }) =>
  async (dispatch) => {
    try {
      const res = await DataService.getAll();

      dispatch({
        type: AWAITING_RETRIEVE_DATA,
        // payload: res.data,
      });

      console.log("response: ", res);

      const data = [];
      const tanggal = [];

      for (let i = 0; i < res.data.length; i++) {
        data.unshift(res.data[i].ActiveTotal);
        tanggal.unshift(res.data[i].datetime);
        // console.log(data[i]);
        // console.log(tanggal[i]);
      }
      console.log("data: ", data);
      console.log("tanggal: ", tanggal);

      dispatch({
        type: SUCCESS_RETRIEVE_DATA,
        payload: {
          data,
          tanggal,
        },
      });
    } catch (err) {
      dispatch({
        type: FAILED_RETRIEVE_DATA,
      });
    }
  };
