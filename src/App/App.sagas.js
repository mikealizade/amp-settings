
// import { takeEvery } from 'redux-saga';
import { takeLatest, call, put } from 'redux-saga/effects';

export function * watchFetchData () {
  yield takeLatest('FETCH_ALL_GUITARISTS', workerFetchData);
}

const fetchData = () => {
  return fetch('http://localhost:3001/', {
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      return response.json();
    });
};

const workerFetchData = function * () {
  try {
    const response = yield call(fetchData);

    yield put({ type: 'FETCH_GUITARISTS_SUCCESS', response });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: 'FETCH_GUITARISTS_FAIL', error });
  }
};
