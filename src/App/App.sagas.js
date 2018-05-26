
import { takeEvery } from 'redux-saga';
import { takeLatest, call, put } from "redux-saga/effects";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watchFetchData() {
  yield takeLatest("FETCH_ALL_GUITARISTS", workerFetchData);
}

// function that makes the api request and returns a Promise for response
function fetchData() {
  return fetch('http://localhost:3001/', {
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    return response.json();
  })
}

// worker saga: makes the api call when watcher saga sees the action
function* workerFetchData() {
  try {
    const response = yield call(fetchData);

    yield put({ type: "FETCH_GUITARISTS_SUCCESS", response });
    //const dog = response.data.message;

    // dispatch a success action to the store with the new dog
    //yield put({ type: "API_CALL_SUCCESS", dog });
  
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", error });
  }
}