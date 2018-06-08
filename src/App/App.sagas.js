
// import { takeEvery } from 'redux-saga';
import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchAllGuitarists, sendEmail } from './App.api.js';

export function * watchFetchData () {
  yield takeLatest('FETCH_ALL_GUITARISTS', workerFetchGuitarists);
  yield takeLatest('SUBMIT_FORM', workerSendEmail);
}

const fetchGuitarists = () => {
  return fetchAllGuitarists();
};

const sendMail = ({ name, message }) => {
  return sendEmail(name, message);
};

const workerSendEmail = function * ({ formData }) {
  try {
    const res = yield call(sendMail, formData);
    yield put({ type: 'SUBMIT_FORM_SUCCESS', res });
  } catch (error) {
    yield put({ type: 'SUBMIT_FORM_FAIL', error });
  }
};

const workerFetchGuitarists = function * () {
  try {
    const [ { guitarists } ] = yield call(fetchGuitarists);
    yield put({ type: 'FETCH_GUITARISTS_SUCCESS', guitarists });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: 'FETCH_GUITARISTS_FAIL', error });
  }
};
