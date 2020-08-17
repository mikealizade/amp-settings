import http from '../http';

interface Email {
  name: string,
  message: string,
}

export const fetchAllGuitarists = async () => {
  try {
    const response = await http.fetch('/guitarists');
    return await response.json();
  } catch (error) {
    console.log('error retrieving guitarists', error);
  }
};

export const sendEmail = async ({ name, message }: Email) => {
  try {
    const data = {
      name,
      message
    };

    const response = await http.post('/send', data);
    return await response.json();
  } catch (error) {
    console.log('error sending mail', error);
  }
};
