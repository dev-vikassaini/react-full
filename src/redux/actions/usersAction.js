import axios from "axios";
import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
} from "../constants/userConstraints";
export const usersAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_USERS_REQUEST });
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch({ type: GET_USERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_USERS_FAILURE,
      payload: error.response.data.messages
        ? error.response.data.messages
        : error.messages,
    });
  }
};
