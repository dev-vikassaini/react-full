import {
  S_GET_USERS_REQUEST,
  S_GET_USERS_SUCCESS,
  S_GET_USERS_FAILURE,
} from "../constansts/users.saga.constrants";

export const getUsers = () => {
  return {
    type: S_GET_USERS_REQUEST,
  };
};

export const getUsersSuccess = (users) => {
  return {
    type: S_GET_USERS_SUCCESS,
    payload: users,
  };
};

export const getUsersFail = (error) => {
  return {
    type: S_GET_USERS_FAILURE,
    payload: error,
  };
};
