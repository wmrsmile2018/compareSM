import { fork, takeEvery, call, put } from 'redux-saga/effects';
import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const sagaEventCallBegan = createAction('saga/eventCallBegan');
export const sagaEventCallSuccess = createAction('saga/eventCallSuccess');
export const sagaEventCallFail = createAction('saga/eventCallFail');

const envBaseUrl = process.env.REACT_APP_API_BASE_URL;

const fetchApi = async ({ baseURL, url, method, data }) =>
  await axios.request({
    baseURL,
    url,
    method,
    data,
  });

const getOptions = ({ url, method, data = null, baseURL = envBaseUrl }) => ({
  baseURL,
  url,
  method,
  data,
});

function* requestExecutor(action) {
  const { url, method, onSuccess, onError, payload, baseURL } = action;

  const options = getOptions({
    baseURL,
    url,
    method,
    data: payload,
  });

  try {
    const res = yield call(fetchApi, options);
    yield put({
      type: onSuccess,
      payload: res.data,
    });
    yield put({ type: sagaEventCallSuccess.type });
  } catch (error) {
    yield put({
      type: onError,
      payload: error.response,
    });
    yield put({ type: sagaEventCallFail.type });
  }
}

function* watchEventSaga() {
  yield takeEvery(sagaEventCallBegan.type, requestExecutor);
}

export function* rootSaga() {
  yield fork(watchEventSaga);
}
