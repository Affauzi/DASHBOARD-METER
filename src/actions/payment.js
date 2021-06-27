import { CONFIRM_PAYMENT, CONFIRM_PAYMENT_SUCCESS } from "./types";

import PaymentService from "../services/servicePayment";

export const paymentMeter = () => async (dispatch) => {
  try {
    const res = await PaymentService.getAll();

    dispatch({
      type: CONFIRM_PAYMENT,
      payload: res.data,
    });

    dispatch({
      type: CONFIRM_PAYMENT_SUCCESS,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
