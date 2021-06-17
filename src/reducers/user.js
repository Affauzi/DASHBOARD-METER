import {
  REQUEST_RETRIEVE_USER,
  SUCCESS_RETRIEVE_USER,
  FAILED_RETRIEVE_USER,
  CREATE_USER,
} from "../actions/types";

const initialState = {
  loading: false,
  no_meter: null,
  password: null,
  nama: null,
  status: 0,
};

function userReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_USER:
      return {
        ...state,
        no_meter: payload.no_meter,
        password: payload.password,
        nama: payload.nama,
        status: payload.status,
        loading: false,
      };
    case REQUEST_RETRIEVE_USER:
      return {
        ...state,
        loading: true,
        no_meter: payload.no_meter,
        password: payload.password,
      };
    case SUCCESS_RETRIEVE_USER:
      return {
        ...state,
        loading: false,
        no_meter: payload.no_meter,
        password: payload.password,
      };
    case FAILED_RETRIEVE_USER:
      return {
        ...state,
        loading: false,
        no_meter: null,
        password: null,
      };
    default:
      return state;
  }
}

export default userReducer;
