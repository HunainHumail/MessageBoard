import { put, call, select, delay } from "redux-saga/effects";
import { HomeActions } from "../actions";
import {
  ApiCaller,
  NavigationService,
} from "../../config";

const validateResponse = (response) => {
  return new Promise((res, rej) => {
    if (response) {
      if (response.status == 200) {
        res({ success: true });
      } else {
        try {
          if (response?.data?.error?.message != "User status unverified.") {
            showToast(response?.data?.error?.message);
          }
          res({ success: false, message: response?.data?.error?.message });
        } catch (error) {
          showToast(`Server Error: ${error}`);
          res({ success: false });
        }
      }
    } else {
      res({ success: false });
      showToast(`Server Error: ${error}`);
    }
  });
};

export function* getPosts(action) {
  const { payload } = action;

  // const response = yield call(ApiCaller.Get, "/moviedb", {
  //   "content-type": "application/json",
  // });
  const response = 'success'
  // if (response_status.success) {
  //   yield put({
  //     type: HomeActions.GET_MOVIES_LIST_SUCCESS,
  //     payload: ans,
  //   });
  //   payload.cb && payload.cb(ans);
  // } else {
  //   yield put({ type: HomeActions.GET_MOVIES_LIST_FAIL });
  // }
}
