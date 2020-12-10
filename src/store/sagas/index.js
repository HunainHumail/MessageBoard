// Imports: Dependencies
import { all, takeEvery, take } from "redux-saga/effects";

// Imports: Actions
import {
  HomeActions,
} from "../actions";

// Imports: Redux Sagas

import {
  getPosts, getUsers
} from "./HomeSaga";


// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([
    //sagas will go here
    takeEvery(HomeActions.GET_POSTS, getPosts),
    takeEvery(HomeActions.GET_USERS, getUsers),

  ]);
}
