
// import { takeEvery } from 'redux-saga';
import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchAllGuitarists } from './App.api.js';

export function * watchFetchData () {
  yield takeLatest('FETCH_ALL_GUITARISTS', workerFetchData);
}

const fetchGuitarists = () => {
  return fetchAllGuitarists();
};

const workerFetchData = function * () {
  try {
    const [ { guitarists } ] = yield call(fetchGuitarists);
    yield put({ type: 'FETCH_GUITARISTS_SUCCESS', guitarists });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: 'FETCH_GUITARISTS_FAIL', error });
  }
};
