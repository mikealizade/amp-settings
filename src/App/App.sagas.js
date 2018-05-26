
// import { takeEvery } from 'redux-saga';
import { takeLatest, call, put } from 'redux-saga/effects';
import api from './App.api.js'

export function * watchFetchData () {
  yield takeLatest('FETCH_ALL_GUITARISTS', workerFetchData);
}

const fetchAllGuitarists = () => {
    return api.fetchAllGuitarists();
};

const workerFetchData = function * () {
  try {
    const response = yield call(fetchAllGuitarists);

    yield put({ type: 'FETCH_GUITARISTS_SUCCESS', response });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: 'FETCH_GUITARISTS_FAIL', error });
  }
};
