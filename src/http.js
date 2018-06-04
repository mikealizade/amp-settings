//const BASE_ENDPOINT_URL = 'http://localhost:3001';
const BASE_ENDPOINT_URL = 'https://amp-settings.herokuapp.com';

export default {

  fetch (url, body = {}, contentType = 'application/json') {
    const options = {
      method: 'get',
      headers: {
        'Content-Type': contentType
      },
      body
    };

    return fetch(BASE_ENDPOINT_URL + url, options);
  },

  put (url, data = {}, contentType = 'application/json') {
    const options = {
      method: 'put',
      headers: {
        'Content-Type': contentType
      },
      body: JSON.stringify(data)
    };

    return fetch(BASE_ENDPOINT_URL + url, options);
  },

  post (url, data = {}, contentType = 'application/json') {
    const options = {
      method: 'post',
      headers: {
        'Content-Type': contentType
      },
      body: JSON.stringify(data)
    };
    return fetch(BASE_ENDPOINT_URL + url, options);
  },

  delete (url, data = {}, contentType = 'application/json') {
    const options = {
      method: 'delete',
      headers: {
        'Content-Type': contentType
      },
      body: JSON.stringify(data)
    };
    return fetch(BASE_ENDPOINT_URL + url, options);
  }
};
