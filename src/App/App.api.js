import http from '../http';

export const fetchAllGuitarists = async () => {
  try {
    const response = await http.fetch('/guitarists');
    return await response.json();
    console.log('response', response);
  } catch (error) {
    console.log('error retrieving guitarists', error);
  }
};

export const sendEmail = async ({ name, message }) => {
  try {
    const data = {
      name,
      message
    };

    const response = await http.post('/send', data);
    debugger;
    const r = await response.json();

    return r;
  } catch (error) {
    console.log('error sending mail', error);
  }
};
