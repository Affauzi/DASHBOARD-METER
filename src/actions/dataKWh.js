import {
  AWAITING_RETRIEVE_DATA,
  FAILED_RETRIEVE_DATA,
  SUCCESS_RETRIEVE_DATA_KWH,
  SUCCESS_RETRIEVE_DATA_VOLTAGE,
  SUCCESS_RETRIEVE_DATA_CURRENT,
} from "./types";

import DataService from "../services/servicesDataMeter";

export const retrieveData =
  ({ time, number }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: AWAITING_RETRIEVE_DATA,
        // payload: res.data,
      });

      const res = await DataService.getOne();

      console.log("response: ", res);

      const dataKwh = [];
      const dataVoltage = [];
      const dataCurrent = [];
      const tanggal = [];

      for (let i = 0; i < res.data.length; i++) {
        dataKwh.unshift(res.data[i].ActiveTotal);
        dataVoltage.unshift(res.data[i].Voltage);
        dataCurrent.unshift(res.data[i].Current);
        tanggal.unshift(res.data[i].datetime);
        // console.log(data[i]);
        // console.log(tanggal[i]);
      }

      const kwh = [];
      //kwh.unshift(data[99]);
      for (let i = 0; i < dataKwh.length - 1; i++) {
        kwh.unshift(dataKwh[i + 1] - dataKwh[i]);
      }
      console.log("data: ", dataKwh);
      console.log("kwh: ", kwh);
      console.log("tanggal: ", tanggal);

      dispatch({
        type: SUCCESS_RETRIEVE_DATA_KWH,
        payload: {
          kwh,
          tanggal,
        },
      });
      dispatch({
        type: SUCCESS_RETRIEVE_DATA_VOLTAGE,
        payload: {
          dataVoltage,
          tanggal,
        },
      });
      dispatch({
        type: SUCCESS_RETRIEVE_DATA_CURRENT,
        payload: {
          dataCurrent,
          tanggal,
        },
      });
    } catch (err) {
      dispatch({
        type: FAILED_RETRIEVE_DATA,
      });
    }
  };
