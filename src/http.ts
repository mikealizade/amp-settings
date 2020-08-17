const BASE_ENDPOINT_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'https://amp-settings.herokuapp.com';

export default {

  fetch (url: string) {
    return fetch(BASE_ENDPOINT_URL + url);
  },

  put (url: string, data = {}, contentType = 'application/json') {
    const options = {
      method: 'put',
      headers: {
        'Content-Type': contentType
      },
      body: JSON.stringify(data)
    };

    return fetch(BASE_ENDPOINT_URL + url, options);
  },

  post (url: string, data = {}, contentType = 'application/json') {
    const options = {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': contentType
      },
      body: JSON.stringify(data)
    };
    return fetch(BASE_ENDPOINT_URL + url, options);
  },

  delete (url: string, data = {}, contentType = 'application/json') {
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
