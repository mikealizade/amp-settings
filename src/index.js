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

// env vars
// make responsive - use css grid
// node receiving / sending email data
// selecting guitarist brings up another search for his songs
// add Google Analytics
// SEO
// add login
// node auth and security
// login => favourites etc

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
