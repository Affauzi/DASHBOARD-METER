import { CONFIRM_PAYMENT, CONFIRM_PAYMENT_SUCCESS } from "../actions/types";

const initialState = {
  loading: false,
  no_meter: null,
};

function paymentReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CONFIRM_PAYMENT:
      return {
        ...state,
        no_meter: false,
        loading: false,
      };
    case CONFIRM_PAYMENT_SUCCESS:
      return {
        ...state,
        loading: true,
        no_meter: payload.no_meter,
        password: payload.password,
      };

    default:
      return state;
  }
}

export default paymentReducer;
