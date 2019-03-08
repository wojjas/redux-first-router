import { put, takeLatest } from "redux-saga/effects";
import * as api from "../api/users";

// worker Saga: will be fired on GET_ALL_REQUESTED actions
function* fetchUsers(action) {
  try {
    const users = yield api.getAllUsersAsync();
    yield put({ type: "GET_ALL_SUCCEEDED", users: users });
  } catch (e) {
    yield put({ type: "GET_ALL_FAILED", message: e.message });
  }
}

/*
  Does not allow concurrent fetches of users. If "GET_ALL_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
  yield takeLatest("GET_ALL_REQUESTED", fetchUsers);
}

export default mySaga;
