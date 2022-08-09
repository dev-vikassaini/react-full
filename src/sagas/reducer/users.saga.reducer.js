import {
  S_GET_USERS_REQUEST,
  S_GET_USERS_SUCCESS,
  S_GET_USERS_FAILURE,
} from "../constansts/users.saga.constrants";

const initialState = {
  usersListFromSaga: [],
  isLoading: false,
  error: {
    message: "",
  },
};

const UserSagaReducer = (state = initialState, action) => {
  switch (action.type) {
    case S_GET_USERS_REQUEST:
      state = { ...state, isLoading: true };
      break;
    case S_GET_USERS_SUCCESS:
      state = { ...state, usersListFromSaga: action.payload, isLoading: false };
      break;
    case S_GET_USERS_FAILURE:
      state = {
        ...state,
        error: {
          message: "Error",
        },
        isLoading: false,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default UserSagaReducer;
