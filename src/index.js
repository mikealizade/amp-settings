import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { watchFetchData } from './App/App.sagas';
import reducers from './rootReducer';
import { App } from './App/App';
const sagaMiddleware = createSagaMiddleware();
const reduxDevTools = window.navigator.userAgent.includes('Chrome') ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : compose;

const store = createStore(
  reducers,
  compose(applyMiddleware(sagaMiddleware), reduxDevTools)
);

sagaMiddleware.run(watchFetchData);

// more guitarists
// SEO
// finish unit tests
// selecting guitarist brings up another search for his songs
// add login
// node auth and security
// login => favourites etc
// node secure email

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
