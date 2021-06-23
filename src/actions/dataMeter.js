import {
  AWAITING_DATA,
  FAILED_DATA,
  SUCCESS_DATA_KWH,
  SUCCESS_DATA_VOLTAGE,
  SUCCESS_DATA_CURRENT,
} from "./types";

import DataService from "../services/servicesDataMeter";

export const retrieveDataMeter =
  (kwh, voltage, current) => async (dispatch) => {
    try {
      dispatch({
        type: AWAITING_DATA,
        // payload: res.data,
      });

      const res = await DataService.getOne();

      console.log("response: ", res, res.data.length);

      //console.log(res.data[19].ActiveTotal);

      const dataKwh = [];
      const dataVoltage = [];
      const dataCurrent = [];
      const tanggal = [];

      dataKwh.push(res.data[19].ActiveTotal);
      dataVoltage.push(res.data[19].Voltage);
      dataCurrent.push(res.data[19].Current);
      tanggal.push(res.data[19].datetime);

      console.log(dataKwh);
      const kwh = [];
      //kwh.unshift(data[99]);
      //   for (let i = 0; i < dataKwh.length - 1; i++) {
      //     kwh.unshift(dataKwh[i + 1] - dataKwh[i]);
      //   }

      dispatch({
        type: SUCCESS_DATA_KWH,
        payload: {
          dataKwh,
          tanggal,
        },
      });
      dispatch({
        type: SUCCESS_DATA_VOLTAGE,
        payload: {
          dataVoltage,
          tanggal,
        },
      });
      dispatch({
        type: SUCCESS_DATA_CURRENT,
        payload: {
          dataCurrent,
          tanggal,
        },
      });
      return Promise.resolve(res.data);
    } catch (err) {
      dispatch({
        type: FAILED_DATA,
      });
      return Promise.reject(err);
    }
  };
