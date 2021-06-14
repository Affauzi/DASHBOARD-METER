import { RETRIEVE_DATA } from "./types";

import DataService from "../services/services";

export const retrieveData = () => async (dispatch) => {
  try {
    const res = await DataService.getAll();

    dispatch({
      type: RETRIEVE_DATA,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
