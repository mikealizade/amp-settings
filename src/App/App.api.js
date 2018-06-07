// import * as CONST from './App.constants';
import http from '../http';

export const fetchAllGuitarists = async () => {
  try {
    const response = await http.fetch('/guitarists');
    return await response.json();
  } catch (error) {
    console.log('error retrieving guitarists', error);
  }
};
