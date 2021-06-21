import {
  REQUEST_RETRIEVE_USER,
  SUCCESS_RETRIEVE_USER,
  FAILED_RETRIEVE_USER,
  CREATE_USER,
} from "./types";

import UserService from "../services/servicesUser";

export const createUser =
  (no_meter, password, nama, status) => async (dispatch) => {
    try {
      const res = await UserService.create({
        no_meter,
        password,
        nama,
        status,
      });

      dispatch({
        type: CREATE_USER,
        payload: res.data,
      });

      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

export const loginUser = (no_meter, password) => async (dispatch) => {
  try {
    const res = await UserService.login({
      no_meter,
      password,
    });

    // const no_meter = [];
    // const password = [];
    // const nama = [];
    // const status = [];

    dispatch({
      type: REQUEST_RETRIEVE_USER,
      payload: res.data,
    });

    dispatch({
      type: SUCCESS_RETRIEVE_USER,
      payload: res.data,
      // payload: {
      //   no_meter,
      //   password,
      // },
    });
    console.log("response: ", res.data);
    return Promise.resolve(res.data);
  } catch (err) {
    dispatch({
      type: FAILED_RETRIEVE_USER,
    });
    return Promise.reject(err);
  }
};

//
