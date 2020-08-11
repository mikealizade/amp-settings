import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import { App } from './App/App';

// more guitarists
// SEO
// finish unit tests
// selecting guitarist brings up another search for his songs
// add login
// node auth and security
// login => favourites etc
// node secure email

ReactDOM.render(
  <RecoilRoot>
    <React.Suspense fallback={<div>Loading...</div>}>
      <App />
    </React.Suspense>
  </RecoilRoot>,
  document.getElementById('root')
);
