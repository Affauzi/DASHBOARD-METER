import { RETRIEVE_DATA } from "../actions/types";

const initialState = [];

function dataReducer(data = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case RETRIEVE_DATA:
      console.log(payload);
      return payload;

    default:
      return data;
  }
}

export default dataReducer;
