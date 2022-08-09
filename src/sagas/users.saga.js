import { all, call, put, takeLatest } from "redux-saga/effects";
import { getUsersSuccess, getUsersFail } from "./actions/users.saga.action";
import { S_GET_USERS_REQUEST } from "./constansts/users.saga.constrants";
import usersService from "./services/users.saga.service";

function* fetchUsersSaga() {
  try {
    const response = yield call(usersService.getUsers());
    yield put(getUsersSuccess({ users: response.data }));
  } catch (e) {
    yield put(
      getUsersFail({
        error: e.message,
      })
    );
  }
}

function* usersSaga() {
  yield all([takeLatest(S_GET_USERS_REQUEST, fetchUsersSaga)]);
}

export default usersSaga;
