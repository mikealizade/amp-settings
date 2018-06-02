import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { watchFetchData } from './App/App.sagas';
import reducers from './rootReducer';
import App from './App/App';
const sagaMiddleware = createSagaMiddleware();
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

let store = createStore(
  reducers,
  compose(applyMiddleware(sagaMiddleware), reduxDevTools)
);

sagaMiddleware.run(watchFetchData);

// webpack
// linting and run tests on commit
// Node BE serving data
// Node receiving / sending email data
// sending email from form submissions
// production build and deployment (codeship?)
// expanding app - users / login / favourites etc

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
